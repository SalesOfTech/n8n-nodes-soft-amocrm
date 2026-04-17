import { IDisplayOptions } from 'n8n-workflow';
import { IUnsortedProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['unsorted'],
		operation: ['create'],
	},
};

export const description: IUnsortedProperties = [
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default:
			'=[{"source_name":"n8n","source_uid":"n8n-uid-1","metadata":{"form_id":"site-1"},"_embedded":{"leads":[{"name":"Unsorted lead"}]}}]',
		required: true,
		displayOptions,
		description: 'JSON array for POST /api/v4/leads/unsorted/forms',
	},
];

