import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { buildSignedRequest, executeSignedRequest } from '../chatsApi';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const channelId = this.getNodeParameter('channelId', index) as string;
	const channelSecret = this.getNodeParameter('channelSecret', index) as string;
	const chatAccountId = this.getNodeParameter('chatAccountId', index) as string;
	const hookApiVersion = this.getNodeParameter('hookApiVersion', index) as string;
	const title = (this.getNodeParameter('title', index) as string).trim();
	const disableTimeWindow = this.getNodeParameter('disableTimeWindow', index) as boolean;

	const body: IDataObject = {
		account_id: chatAccountId,
		hook_api_version: hookApiVersion,
		is_time_window_disabled: disableTimeWindow,
	};

	if (title) {
		body.title = title;
	}

	const path = `/v2/origin/custom/${channelId}/connect`;
	const requestOptions = buildSignedRequest('POST', path, body, channelSecret);
	const responseData = await executeSignedRequest(this, requestOptions);

	return this.helpers.returnJsonArray(responseData);
}
