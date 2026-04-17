import { INodeProperties } from 'n8n-workflow';

import * as connectChatChannel from './connectChatChannel';
import * as sendChatApiMessage from './sendChatApiMessage';

export { connectChatChannel };
export { sendChatApiMessage };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['amojo'],
			},
		},
		options: [
			{
				name: 'Connect Chat Channel',
				value: 'connectChatChannel',
				action: 'Connect chat channel to account via signed chats api',
			},
			{
				name: 'Send Chat API Message',
				value: 'sendChatApiMessage',
				action: 'Send signed chat api message',
			},
		],
		default: 'sendChatApiMessage',
	},
	...connectChatChannel.description,
	...sendChatApiMessage.description,
];
