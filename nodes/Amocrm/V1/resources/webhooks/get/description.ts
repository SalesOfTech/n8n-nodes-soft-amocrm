import { IDisplayOptions } from 'n8n-workflow';
import { IWebhooksProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['webhooks'],
		operation: ['getWebhooks'],
	},
};

export const description: IWebhooksProperties = [
	{
		displayName: 'Query JSON',
		name: 'queryJson',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '={}',
		displayOptions,
		description: 'Optional query object for GET /api/v4/webhooks',
	},
];

