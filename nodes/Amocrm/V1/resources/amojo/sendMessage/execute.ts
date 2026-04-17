import { IDataObject, IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { apiRequestByFullUrl } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scopeId = this.getNodeParameter('scopeId', index) as string;
	const chatId = this.getNodeParameter('chatId', index) as string;
	const withVideo = this.getNodeParameter('with_video', index) as boolean;
	const stand = this.getNodeParameter('stand', index) as string;
	const useAjaxHeader = this.getNodeParameter('useAjaxHeader', index) as boolean;
	const payloadJson = this.getNodeParameter('payloadJson', index) as string;

	let body;
	try {
		body = JSON.parse(payloadJson);
	} catch {
		throw new NodeOperationError(this.getNode(), 'Payload JSON must be valid JSON object', {
			itemIndex: index,
		});
	}

	const qs = {
		with_video: withVideo,
		stand,
	} as IDataObject;

	const headers: IDataObject = {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'content-type': 'application/json',
	};

	if (useAjaxHeader) {
		headers['X-Requested-With'] = 'XMLHttpRequest';
	}

	const endpointUrl = `https://amojo.amocrm.ru/v1/chats/${scopeId}/${chatId}/messages`;
	const responseData = await apiRequestByFullUrl.call(this, 'POST', endpointUrl, body, qs, headers);
	return this.helpers.returnJsonArray(responseData);
}

