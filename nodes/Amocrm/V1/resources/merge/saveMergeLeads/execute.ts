import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getSubdomainUrl } from '../../../helpers/getSubdomainUrl';
import { apiRequestByFullUrl } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const formBody = this.getNodeParameter('formBody', index) as string;
	const baseUrl = await getSubdomainUrl.call(this, index);
	const url = `${baseUrl}/ajax/merge/leads/save`;
	const headers = {
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = await apiRequestByFullUrl.call(this, 'POST', url, formBody, {}, headers);
	return this.helpers.returnJsonArray(responseData);
}

