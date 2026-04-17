import { IDisplayOptions } from 'n8n-workflow';
import { IWebhooksProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['webhooks'],
		operation: ['addOrUpdateWebhooks'],
	},
};

export const description: IWebhooksProperties = [
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default: '=[{"destination":"https://example.com/hook","settings":{"leads_statuses":[{"pipeline_id":0}]}}]',
		required: true,
		displayOptions,
		description: 'JSON array for PATCH /api/v4/webhooks',
	},
];

