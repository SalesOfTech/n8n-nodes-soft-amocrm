import { INodeProperties } from 'n8n-workflow';

import * as getEmail from './getEmail';
import * as getMailboxes from './getMailboxes';

export { getEmail, getMailboxes };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['mail'],
			},
		},
		options: [
			{ name: 'Get Email', value: 'getEmail', action: 'Get email by thread message' },
			{ name: 'Get Mailboxes', value: 'getMailboxes', action: 'Get mailboxes' },
		],
		default: 'getEmail',
	},
	...getEmail.description,
	...getMailboxes.description,
];

