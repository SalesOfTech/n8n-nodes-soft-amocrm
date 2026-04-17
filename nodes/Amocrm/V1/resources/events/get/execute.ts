import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { INumRange, IStringRange } from '../../../Interface';
import { stringToArray } from '../../../helpers/stringToArray';
import { apiRequest, apiRequestAllItems } from '../../../transport';
import { makeRangeProperty } from '../../_components/DateRangeDescription';

interface IFilter {
	id?: number[];
	entity_id?: number[];
	entity_type?: string[];
	type?: string[];
	created_by?: number[];
	created_at?: INumRange;
}

interface FilterFromFrontend {
	id?: string;
	entity_id?: string;
	entity_type?: string[];
	type?: string;
	created_by?: string;
	created_at?: {
		dateRangeCustomProperties: IStringRange;
	};
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	const filter = this.getNodeParameter('filter', index) as FilterFromFrontend;
	if (Object.keys(filter).length) {
		qs.filter = {
			id: stringToArray(filter.id).filter((el) => typeof el === 'number'),
			entity_id: stringToArray(filter.entity_id).filter((el) => typeof el === 'number'),
			entity_type: filter.entity_type,
			type: stringToArray(filter.type).filter((el) => typeof el === 'string'),
			created_by: stringToArray(filter.created_by).filter((el) => typeof el === 'number'),
			created_at: makeRangeProperty(filter.created_at?.dateRangeCustomProperties),
		} as IFilter;
	}

	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	if (!returnAll) {
		qs.page = this.getNodeParameter('page', index) as number;
	}
	qs.limit = this.getNodeParameter('limit', index) as number;

	const endpoint = 'events';
	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}

