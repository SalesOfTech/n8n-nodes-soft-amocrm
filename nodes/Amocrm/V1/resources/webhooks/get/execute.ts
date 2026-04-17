import {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const queryJson = this.getNodeParameter('queryJson', index) as string;
	let qs: IDataObject = {};

	try {
		qs = queryJson ? (JSON.parse(queryJson) as IDataObject) : {};
	} catch {
		throw new NodeOperationError(this.getNode(), 'Query JSON must be valid JSON object', {
			itemIndex: index,
		});
	}

	const responseData = await apiRequest.call(this, 'GET', 'webhooks', body, qs);
	return this.helpers.returnJsonArray(responseData);
}

