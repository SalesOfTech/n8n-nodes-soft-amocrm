import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { getSubdomainUrl } from '../../../helpers/getSubdomainUrl';
import { apiRequestByFullUrl } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const jobId = this.getNodeParameter('job_id', index) as number;
	if (!jobId || jobId <= 0) {
		throw new NodeOperationError(this.getNode(), 'Job ID must be greater than 0', {
			itemIndex: index,
		});
	}

	const baseUrl = await getSubdomainUrl.call(this, index);
	const query = `request%5Bmultiactions%5D%5Bstatus%5D%5B0%5D%5Bjob_id%5D=${encodeURIComponent(
		String(jobId),
	)}`;
	const url = `${baseUrl}/ajax/v1/multiactions/status?${query}`;
	const headers = {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	const responseData = await apiRequestByFullUrl.call(this, 'GET', url, {}, {}, headers);
	return this.helpers.returnJsonArray(responseData);
}

