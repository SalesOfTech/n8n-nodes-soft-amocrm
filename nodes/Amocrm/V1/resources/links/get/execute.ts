import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entity_type', index) as string;
	const entityId = this.getNodeParameter('entity_id', index) as number;
	const endpoint = `${entityType}/${entityId}/links`;
	const responseData = await apiRequest.call(this, 'GET', endpoint, {});
	return this.helpers.returnJsonArray(responseData);
}

