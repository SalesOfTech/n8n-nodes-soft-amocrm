import { IDisplayOptions } from 'n8n-workflow';
import { IShortLinksProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['shortLinks'],
		operation: ['createShortLink'],
	},
};

export const description: IShortLinksProperties = [
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: { rows: 6 },
		default: '{"link":"https://example.com"}',
		required: true,
		displayOptions,
		description: 'JSON object for POST /api/v4/short_links',
	},
];

