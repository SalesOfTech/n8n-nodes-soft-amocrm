import { IDisplayOptions } from 'n8n-workflow';
import { IMergeProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['merge'],
		operation: ['saveMergeContacts'],
	},
};

export const description: IMergeProperties = [
	{
		displayName: 'Form Body',
		name: 'formBody',
		type: 'string',
		typeOptions: { rows: 4 },
		default: 'contact_main=0&contact_merge[]=0',
		required: true,
		displayOptions,
		description: 'Raw x-www-form-urlencoded body as required by /ajax/merge/contacts/save',
	},
];

