import { IDisplayOptions } from 'n8n-workflow';
import { IMergeProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['merge'],
		operation: ['saveMergeLeads'],
	},
};

export const description: IMergeProperties = [
	{
		displayName: 'Form Body',
		name: 'formBody',
		type: 'string',
		typeOptions: { rows: 4 },
		default: 'lead_main=0&lead_merge[]=0',
		required: true,
		displayOptions,
		description: 'Raw x-www-form-urlencoded body as required by /ajax/merge/leads/save',
	},
];

