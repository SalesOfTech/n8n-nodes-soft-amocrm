import { INodeProperties } from 'n8n-workflow';

import * as getWebhooks from './get';
import * as addOrUpdateWebhooks from './addOrUpdate';

export { getWebhooks, addOrUpdateWebhooks };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getWebhooks',
				action: 'Get webhooks',
			},
			{
				name: 'Add Or Update',
				value: 'addOrUpdateWebhooks',
				action: 'Add or update webhooks',
			},
		],
		default: 'getWebhooks',
	},
	...getWebhooks.description,
	...addOrUpdateWebhooks.description,
];

