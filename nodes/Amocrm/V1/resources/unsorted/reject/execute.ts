import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const uid = this.getNodeParameter('uid', index) as string;
	const payloadJson = this.getNodeParameter('payloadJson', index) as string;
	let body;

	try {
		body = payloadJson ? JSON.parse(payloadJson) : {};
	} catch {
		throw new NodeOperationError(this.getNode(), 'Payload JSON must be valid JSON object', {
			itemIndex: index,
		});
	}

	const endpoint = `leads/unsorted/${uid}/reject`;
	const responseData = await apiRequest.call(this, 'POST', endpoint, body);
	return this.helpers.returnJsonArray(responseData);
}

