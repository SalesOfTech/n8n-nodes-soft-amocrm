import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { buildSignedRequest, executeSignedRequest, makeMessageId } from '../chatsApi';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scopeId = this.getNodeParameter('scopeId', index) as string;
	const channelSecret = this.getNodeParameter('channelSecret', index) as string;
	const conversationId = this.getNodeParameter('conversationId', index) as string;
	const receiverId = this.getNodeParameter('receiverId', index) as string;
	const messageText = this.getNodeParameter('messageText', index) as string;
	const senderId = this.getNodeParameter('senderId', index) as string;
	const senderName = this.getNodeParameter('senderName', index) as string;
	const messageId = (this.getNodeParameter('messageId', index) as string).trim();
	const silent = this.getNodeParameter('silent', index) as boolean;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;

	const senderRefId = (additionalOptions.senderRefId as string | undefined)?.trim();
	const receiverRefId = (additionalOptions.receiverRefId as string | undefined)?.trim();
	const receiverName = (additionalOptions.receiverName as string | undefined)?.trim();

	const nowMs = Date.now();

	const sender: IDataObject = {
		id: senderId,
		name: senderName,
	};

	if (senderRefId) {
		sender.ref_id = senderRefId;
	}

	const receiver: IDataObject = {
		id: receiverId,
	};

	if (receiverName) {
		receiver.name = receiverName;
	}

	if (receiverRefId) {
		receiver.ref_id = receiverRefId;
	}

	const body: IDataObject = {
		event_type: 'new_message',
		payload: {
			timestamp: Math.floor(nowMs / 1000),
			msec_timestamp: nowMs,
			msgid: messageId || makeMessageId(),
			conversation_id: conversationId,
			sender,
			receiver,
			message: {
				type: 'text',
				text: messageText,
			},
			silent,
		},
	};

	const path = `/v2/origin/custom/${scopeId}`;
	const requestOptions = buildSignedRequest('POST', path, body, channelSecret);
	const responseData = await executeSignedRequest(this, requestOptions);

	return this.helpers.returnJsonArray(responseData);
}
