import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequestByFullUrl } from '../../../transport';

interface IMailbox extends IDataObject {
	parser?: boolean;
	state?: string;
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const accountId = this.getNodeParameter('account_id', index) as string;
	const onlyActive = this.getNodeParameter('only_active', index) as boolean;

	const url = `https://amomail.amocrm.ru/api/v2/${accountId}/mailboxes`;
	const qs = {
		mode: 'setup',
	};
	const headers = {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = (await apiRequestByFullUrl.call(this, 'GET', url, {}, qs, headers)) as IMailbox[];

	if (!onlyActive || !Array.isArray(responseData)) {
		return this.helpers.returnJsonArray(responseData);
	}

	const filtered = responseData.filter((item) => !item.parser && item.state === 'complete');
	return this.helpers.returnJsonArray(filtered);
}
