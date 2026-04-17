import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getSubdomainUrl } from '../../../helpers/getSubdomainUrl';
import { apiRequestByFullUrl } from '../../../transport';

interface ITimelineResponse {
	_embedded?: {
		items?: IDataObject[];
	};
	_links?: {
		prev?: string;
	};
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const leadId = this.getNodeParameter('lead_id', index) as number;
	const limit = this.getNodeParameter('limit', index) as number;
	const baseUrl = await getSubdomainUrl.call(this, index);
	let url = `${baseUrl}/ajax/v3/leads/${leadId}/events_timeline/?limit=${limit}`;
	const headers = {
		accept: '*/*',
		'X-Requested-With': 'XMLHttpRequest',
	};

	const allItems: IDataObject[] = [];
	while (url) {
		const resp = (await apiRequestByFullUrl.call(this, 'GET', url, {}, {}, headers)) as ITimelineResponse;
		if (!resp || typeof resp !== 'object') break;
		const items = resp._embedded?.items;
		if (Array.isArray(items)) {
			allItems.push(...items);
		}
		const prevUrl = resp._links?.prev;
		url = typeof prevUrl === 'string' && prevUrl.length ? prevUrl : '';
	}

	allItems.sort((a, b) => Number(a.date_create ?? 0) - Number(b.date_create ?? 0));
	return this.helpers.returnJsonArray(allItems);
}
