import { IDisplayOptions } from 'n8n-workflow';
import { IMergeProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['merge'],
		operation: ['getMergeLeadsInfo'],
	},
};

export const description: IMergeProperties = [
	{
		displayName: 'Lead IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
		description: 'Comma-separated lead IDs (minimum 2)',
	},
];

