import { IDisplayOptions } from 'n8n-workflow';
import { IMergeProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['merge'],
		operation: ['getMergeContactsInfo'],
	},
};

export const description: IMergeProperties = [
	{
		displayName: 'Contact IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
		description: 'Comma-separated contact IDs (minimum 2)',
	},
];

