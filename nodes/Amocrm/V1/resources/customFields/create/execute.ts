import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { resolveCustomFieldsEndpoint } from '../common';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entity_type', index) as string;
	const endpoint = resolveCustomFieldsEndpoint(this, index, entityType);
	const payloadJson = this.getNodeParameter('payloadJson', index) as string;
	let body;

	try {
		body = JSON.parse(payloadJson);
	} catch {
		throw new NodeOperationError(this.getNode(), 'Payload JSON must be valid JSON array/object', {
			itemIndex: index,
		});
	}

	const responseData = await apiRequest.call(this, 'POST', endpoint, body);
	return this.helpers.returnJsonArray(responseData);
}

