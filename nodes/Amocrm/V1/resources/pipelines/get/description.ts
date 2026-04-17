import { IDisplayOptions } from 'n8n-workflow';
import { IPipelinesProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['pipelines'],
		operation: ['get'],
	},
};

export const description: IPipelinesProperties = [
	{
		displayName: 'With Statuses',
		name: 'withStatuses',
		type: 'boolean',
		default: true,
		displayOptions,
		description: 'Whether to include statuses for each pipeline',
	},
];

