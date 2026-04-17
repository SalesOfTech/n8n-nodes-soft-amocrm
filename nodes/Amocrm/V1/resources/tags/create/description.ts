import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ITagsProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['tags'],
		operation: ['createTags'],
	},
};

const entityTypeField: INodeProperties = {
	displayName: 'Entity Type',
	name: 'entity_type',
	type: 'options',
	default: 'leads',
	displayOptions,
	options: [
		{ name: 'Leads', value: 'leads' },
		{ name: 'Contacts', value: 'contacts' },
		{ name: 'Companies', value: 'companies' },
		{ name: 'Customers', value: 'customers' },
	],
};

export const description: ITagsProperties = [
	entityTypeField,
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default: '=[{"name":"tag-1"}]',
		required: true,
		displayOptions,
		description: 'JSON array/object for POST /api/v4/{entity_type}/tags',
	},
];

