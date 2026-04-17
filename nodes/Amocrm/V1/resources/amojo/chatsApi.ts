import { createHash, createHmac, randomBytes, randomUUID } from 'crypto';
import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

const CHATS_API_BASE_URL = 'https://amojo.amocrm.ru';
const CONTENT_TYPE = 'application/json';

export const makeMessageId = () =>
	(typeof randomUUID === 'function'
		? `n8n-${randomUUID()}`
		: `n8n-${randomBytes(16).toString('hex')}`);

export const buildSignedRequest = (
	method: 'POST' | 'DELETE',
	path: string,
	body: IDataObject,
	secret: string,
): IHttpRequestOptions => {
	const date = new Date().toUTCString();
	const requestBody = JSON.stringify(body);
	const contentMd5 = createHash('md5').update(requestBody).digest('hex');
	const signaturePayload = [method, contentMd5, CONTENT_TYPE, date, path].join('\n');
	const signature = createHmac('sha1', secret).update(signaturePayload).digest('hex');

	return {
		method,
		url: `${CHATS_API_BASE_URL}${path}`,
		body: requestBody,
		headers: {
			Date: date,
			'Content-Type': CONTENT_TYPE,
			'Content-MD5': contentMd5,
			'X-Signature': signature,
		},
	};
};

export const executeSignedRequest = async (
	context: IExecuteFunctions,
	options: IHttpRequestOptions,
) => {
	const responseData = await context.helpers.httpRequest(options);

	if (typeof responseData === 'string') {
		try {
			return JSON.parse(responseData) as IDataObject;
		} catch {
			return { raw: responseData } as IDataObject;
		}
	}

	return responseData as IDataObject;
};
