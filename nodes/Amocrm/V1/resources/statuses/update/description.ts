import { IDisplayOptions } from 'n8n-workflow';
import { IStatusesProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['statuses'],
		operation: ['update'],
	},
};

export const description: IStatusesProperties = [
	{
		displayName: 'Pipeline Name or ID',
		name: 'pipeline_id',
		type: 'options',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getPipelines',
		},
		displayOptions,
	},
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default: '=[{"id":12345,"name":"Updated status"}]',
		required: true,
		displayOptions,
		description: 'JSON array for PATCH /api/v4/leads/pipelines/{pipeline_id}/statuses',
	},
];

