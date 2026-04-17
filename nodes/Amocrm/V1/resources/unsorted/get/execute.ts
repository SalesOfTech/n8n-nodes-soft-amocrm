import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';
import { stringToArray } from '../../../helpers/stringToArray';

interface IFilterFromFrontend {
	uid?: string;
	pipeline_id?: string;
	category?: string;
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	const filter = this.getNodeParameter('filter', index) as IFilterFromFrontend;
	if (Object.keys(filter).length) {
		qs.filter = {
			uid: stringToArray(filter.uid).filter((el) => typeof el === 'string'),
			pipeline_id: stringToArray(filter.pipeline_id).filter((el) => typeof el === 'number'),
			category: filter.category,
		};
	}

	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	if (!returnAll) {
		qs.page = this.getNodeParameter('page', index) as number;
	}
	qs.limit = this.getNodeParameter('limit', index) as number;

	const requestMethod = 'GET';
	const endpoint = 'leads/unsorted';

	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}

