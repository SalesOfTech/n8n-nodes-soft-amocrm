import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequestByFullUrl } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const accountEmail = this.getNodeParameter('account_email', index) as string;
	const threadId = this.getNodeParameter('thread_id', index) as string;
	const messageId = this.getNodeParameter('message_id', index) as string;

	const url = `https://amomail.amocrm.ru/api/v2/${accountEmail}/threads/${threadId}/messages`;
	const qs = {
		page: 1,
		limit: 10,
		opened_at: true,
	};
	const headers = {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = (await apiRequestByFullUrl.call(this, 'GET', url, {}, qs, headers)) as {
		items?: Array<{ id: string | number }>;
	};

	if (messageId && Array.isArray(responseData?.items)) {
		const message = responseData.items.find((item) => String(item.id) === String(messageId));
		return this.helpers.returnJsonArray(message ? [message] : []);
	}

	return this.helpers.returnJsonArray(responseData);
}

