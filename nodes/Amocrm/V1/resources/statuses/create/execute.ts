import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pipelineId = this.getNodeParameter('pipeline_id', index) as number;
	const payloadJson = this.getNodeParameter('payloadJson', index) as string;
	let body;

	try {
		body = JSON.parse(payloadJson);
	} catch {
		throw new NodeOperationError(this.getNode(), 'Payload JSON must be valid JSON array/object', {
			itemIndex: index,
		});
	}

	const endpoint = `leads/pipelines/${pipelineId}/statuses`;
	const responseData = await apiRequest.call(this, 'POST', endpoint, body);
	return this.helpers.returnJsonArray(responseData);
}

