import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ICustomFieldsProperties } from '../../interfaces';
import { addCatalogSelector } from '../../_components/CatalogSelector';
import { addLimitDescription } from '../../_components/LimitDescription';
import { addPageDescription } from '../../_components/PageDescription';
import { addReturnAll } from '../../_components/ReturnAllDescription';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customFields'],
		operation: ['getCustomFields'],
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
	addReturnAll(displayOptions),
	addPageDescription({
		show: {
			...displayOptions.show,
			returnAll: [false],
		},
	}),
	addLimitDescription(displayOptions),
];