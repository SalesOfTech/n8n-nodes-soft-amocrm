import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ICustomFieldsProperties } from '../../interfaces';
import { addCatalogSelector } from '../../_components/CatalogSelector';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customFields'],
		operation: ['createCustomFields'],
	},
};

const entityTypeField: INodeProperties = {
	displayName: 'Entity Type',
	name: 'entity_type',
	type: 'options',
	default: 'leads',
	displayOptions,
	options: [
		{
			name: 'Catalogs',
			value: 'catalogs',
		},
		{
			name: 'Companies',
			value: 'companies',
		},
		{
			name: 'Contacts',
			value: 'contacts',
		},
		{
			name: 'Customers',
			value: 'customers',
		},
		{
			name: 'Leads',
			value: 'leads',
		},
	],
};

export const description: ICustomFieldsProperties = [
	entityTypeField,
	addCatalogSelector({
		show: {
			...displayOptions.show,
			entity_type: ['catalogs'],
		},
	}),
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 7,
		},
		default: '=[{"name":"Field","type":"text"}]',
		required: true,
		displayOptions,
		description: 'JSON array/object for creating custom fields',
	},
];