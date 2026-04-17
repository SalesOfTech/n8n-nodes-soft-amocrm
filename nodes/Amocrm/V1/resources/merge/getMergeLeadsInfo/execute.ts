import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { stringToArray } from '../../../helpers/stringToArray';
import { getSubdomainUrl } from '../../../helpers/getSubdomainUrl';
import { apiRequestByFullUrl } from '../../../transport';

const toBracketArrayBody = (key: string, values: number[]): string =>
	values.map((v) => `${encodeURIComponent(key)}%5B%5D=${encodeURIComponent(String(v))}`).join('&');

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const idsRaw = this.getNodeParameter('ids', index) as string;
	const ids = stringToArray(idsRaw).filter((v) => typeof v === 'number') as number[];
	if (ids.length < 2) {
		throw new NodeOperationError(this.getNode(), 'At least 2 lead IDs are required', {
			itemIndex: index,
		});
	}

	const baseUrl = await getSubdomainUrl.call(this, index);
	const url = `${baseUrl}/ajax/merge/leads/info/`;
	const body = toBracketArrayBody('id', ids);
	const headers = {
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = await apiRequestByFullUrl.call(this, 'POST', url, body, {}, headers);
	return this.helpers.returnJsonArray(responseData);
}

