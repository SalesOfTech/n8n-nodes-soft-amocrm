import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const withStatuses = this.getNodeParameter('withStatuses', index) as boolean;
	if (withStatuses) {
		qs.with = 'statuses';
	}

	const responseData = await apiRequest.call(this, 'GET', 'leads/pipelines', body, qs);
	return this.helpers.returnJsonArray(responseData);
}

