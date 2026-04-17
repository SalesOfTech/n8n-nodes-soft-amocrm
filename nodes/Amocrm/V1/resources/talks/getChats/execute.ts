import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { stringToArray } from '../../../helpers/stringToArray';
import { getSubdomainUrl } from '../../../helpers/getSubdomainUrl';
import { apiRequestByFullUrl } from '../../../transport';

const toBracketArrayBody = (key: string, values: string[]): string =>
	values.map((v) => `${encodeURIComponent(key)}%5B%5D=${encodeURIComponent(v)}`).join('&');

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const chatIdsRaw = this.getNodeParameter('chat_ids', index) as string;
	const chatIds = stringToArray(chatIdsRaw).map((v) => String(v));
	const baseUrl = await getSubdomainUrl.call(this, index);
	const url = `${baseUrl}/ajax/v2/talks`;
	const body = toBracketArrayBody('chats_ids', chatIds);
	const headers = {
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = await apiRequestByFullUrl.call(this, 'POST', url, body, {}, headers);
	return this.helpers.returnJsonArray(responseData);
}

