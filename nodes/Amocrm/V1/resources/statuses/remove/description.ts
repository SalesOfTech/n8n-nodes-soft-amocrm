import { IDisplayOptions } from 'n8n-workflow';
import { IStatusesProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['statuses'],
		operation: ['remove'],
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
		displayName: 'Status ID',
		name: 'status_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
];

