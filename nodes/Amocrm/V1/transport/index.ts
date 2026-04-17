import {
	GenericValue,
	IDataObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	NodeOperationError,
} from 'n8n-workflow';
import { Lock } from 'async-await-mutex-lock';

const lock = new Lock();
const RETRY_STATUSES = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = 4;
const BASE_RETRY_DELAY_MS = 300;

const sleep = async (ms: number) => await new Promise((resolve) => setTimeout(resolve, ms));

const parseRetryAfterMs = (error: any): number | undefined => {
	const retryAfterHeader =
		error?.cause?.response?.headers?.['retry-after'] ??
		error?.response?.headers?.['retry-after'] ??
		error?.headers?.['retry-after'];

	if (!retryAfterHeader) return undefined;
	const retryAfter = Array.isArray(retryAfterHeader) ? retryAfterHeader[0] : retryAfterHeader;
	const seconds = Number(retryAfter);
	if (!Number.isNaN(seconds) && Number.isFinite(seconds)) {
		return Math.max(0, seconds * 1000);
	}

	const retryDateMs = Date.parse(String(retryAfter));
	if (!Number.isNaN(retryDateMs)) {
		return Math.max(0, retryDateMs - Date.now());
	}
	return undefined;
};

const getStatusCode = (error: any): number | undefined =>
	error?.cause?.response?.status ?? error?.response?.status ?? error?.statusCode;

const handleValidationError = (
	context: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	error: any,
) => {
	const concreteErrorsDescription =
		error?.cause?.response?.data?.['validation-errors'] ?? error?.response?.data?.['validation-errors'];
	if (concreteErrorsDescription) {
		throw new NodeOperationError(context.getNode(), 'Incorrect fields', {
			description: JSON.stringify(concreteErrorsDescription, null, 2),
		});
	}
};

async function executeWithRetry(
	context: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	credentialType: string,
	options: IHttpRequestOptions,
) {
	let attempt = 0;
	while (true) {
		try {
			return await context.helpers.httpRequestWithAuthentication.call(context, credentialType, options);
		} catch (error) {
			handleValidationError(context, error);
			const statusCode = getStatusCode(error);
			const shouldRetry = !!statusCode && RETRY_STATUSES.has(statusCode);
			if (!shouldRetry || attempt >= MAX_RETRIES) {
				throw error;
			}

			const retryAfterMs = parseRetryAfterMs(error);
			const backoffDelayMs = BASE_RETRY_DELAY_MS * 2 ** attempt;
			const delayMs = retryAfterMs ?? backoffDelayMs;
			await sleep(delayMs);
			attempt++;
		}
	}
}

export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
) {
	const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
	const credentialType =
		authenticationMethod === 'oAuth2' ? 'amocrmOAuth2Api' : 'amocrmLongLivedApi';
	const credentials = await this.getCredentials(credentialType);

	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url: `https://${credentials.subdomain}.amocrm.ru/api/v4/${endpoint}`,
		headers: {
			'content-type': 'application/json; charset=utf-8',
		},
	};
	try {
		await lock.acquire();
		return await executeWithRetry(this, credentialType, options);
	} catch (error) {
		throw error;
	} finally {
		lock.release();
	}
}

export async function apiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
) {
	const returnData: any[] = [];

	let responseData;
	query.page = 1;
	query.limit = query.limit ? query.limit : 250;

	do {
		responseData = await apiRequest.call(this, method, endpoint, body, query);
		query.page++;
		returnData.push(responseData);
	} while (responseData._links?.next?.href?.length);

	return returnData;
}

export async function apiRequestByFullUrl(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	url: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
	headers: IDataObject = {},
) {
	const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
	const credentialType =
		authenticationMethod === 'oAuth2' ? 'amocrmOAuth2Api' : 'amocrmLongLivedApi';

	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url,
		headers: {
			'content-type': 'application/json; charset=utf-8',
			...headers,
		},
	};

	try {
		await lock.acquire();
		return await executeWithRetry(this, credentialType, options);
	} catch (error) {
		throw error;
	} finally {
		lock.release();
	}
}
