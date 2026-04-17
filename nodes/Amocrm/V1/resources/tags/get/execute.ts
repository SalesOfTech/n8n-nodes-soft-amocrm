import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entity_type', index) as string;
	const endpoint = `${entityType}/tags`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	if (!returnAll) {
		qs.page = this.getNodeParameter('page', index) as number;
	}
	qs.limit = this.getNodeParameter('limit', index) as number;

	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}

