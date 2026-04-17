import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pipelineId = this.getNodeParameter('pipeline_id', index) as number;
	const endpoint = `leads/pipelines/${pipelineId}`;
	const responseData = await apiRequest.call(this, 'DELETE', endpoint, {});
	return this.helpers.returnJsonArray(responseData);
}

