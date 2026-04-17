import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { stringToArray } from '../../../helpers/stringToArray';
import { apiRequest, apiRequestAllItems } from '../../../transport';

interface FilterFromFrontend {
	query?: string;
	id?: string;
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const filter = this.getNodeParameter('filter', index) as FilterFromFrontend;

	if (filter.query) {
		qs.query = filter.query;
	}

	if (filter.id) {
		qs.filter = {
			id: stringToArray(filter.id).filter((v) => typeof v === 'number'),
		};
	}

	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	if (!returnAll) {
		qs.page = this.getNodeParameter('page', index) as number;
	}
	qs.limit = this.getNodeParameter('limit', index) as number;

	const endpoint = 'customers';
	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}

