import { IDisplayOptions } from 'n8n-workflow';
import { IPipelinesProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['pipelines'],
		operation: ['update'],
	},
};

export const description: IPipelinesProperties = [
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default: '=[{"id":12345,"name":"Updated pipeline"}]',
		required: true,
		displayOptions,
		description: 'JSON array for PATCH /api/v4/leads/pipelines',
	},
];

