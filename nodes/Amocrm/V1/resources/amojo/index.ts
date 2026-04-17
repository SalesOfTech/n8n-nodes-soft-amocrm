import { INodeProperties } from 'n8n-workflow';

import * as sendMessage from './sendMessage';

export { sendMessage };

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
				name: 'Send Message',
				value: 'sendMessage',
				action: 'Send messenger message via amojo',
			},
		],
		default: 'sendMessage',
	},
	...sendMessage.description,
];

