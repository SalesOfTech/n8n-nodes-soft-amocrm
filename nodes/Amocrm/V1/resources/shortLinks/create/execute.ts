import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const payloadJson = this.getNodeParameter('payloadJson', index) as string;
	let data;
	try {
		data = JSON.parse(payloadJson);
	} catch {
		throw new NodeOperationError(this.getNode(), 'Payload JSON must be valid JSON object', {
			itemIndex: index,
		});
	}

	const responseData = await apiRequest.call(this, 'POST', 'short_links', [data]);
	return this.helpers.returnJsonArray(responseData);
}

