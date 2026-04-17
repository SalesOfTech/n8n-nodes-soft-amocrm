import { IDisplayOptions } from 'n8n-workflow';
import { IPipelinesProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['pipelines'],
		operation: ['create'],
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
		default: '=[{"name":"New pipeline","sort":100}]',
		required: true,
		displayOptions,
		description: 'JSON array for POST /api/v4/leads/pipelines',
	},
];

