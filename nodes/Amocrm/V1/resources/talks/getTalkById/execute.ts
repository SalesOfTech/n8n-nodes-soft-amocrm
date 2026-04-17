import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const talkId = this.getNodeParameter('talk_id', index) as number;
	const responseData = await apiRequest.call(this, 'GET', `talks/${talkId}`, {});
	return this.helpers.returnJsonArray(responseData);
}

