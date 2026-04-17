import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getSubdomainUrl } from '../../../helpers/getSubdomainUrl';
import { apiRequestByFullUrl } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityId = this.getNodeParameter('entity_id', index) as number;
	const botId = this.getNodeParameter('bot_id', index) as number;
	const entityType = this.getNodeParameter('entity_type', index) as number;

	const baseUrl = await getSubdomainUrl.call(this, index);
	const url = `${baseUrl}/ajax/v2/messages/processing`;
	const body = `id=${encodeURIComponent(String(botId))}&type=2&entity_id=${encodeURIComponent(
		String(entityId),
	)}&entity_type=${encodeURIComponent(String(entityType))}`;
	const headers = {
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = await apiRequestByFullUrl.call(this, 'POST', url, body, {}, headers);
	return this.helpers.returnJsonArray(responseData);
}

