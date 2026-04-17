import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const category = this.getNodeParameter('category', index) as string;
	if (category) {
		qs.category = category;
	}

	const responseData = await apiRequest.call(this, 'GET', 'leads/unsorted/summary', body, qs);
	return this.helpers.returnJsonArray(responseData);
}

