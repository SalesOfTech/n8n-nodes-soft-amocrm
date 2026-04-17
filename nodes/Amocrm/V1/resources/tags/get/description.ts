import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ITagsProperties } from '../../interfaces';
import { addLimitDescription } from '../../_components/LimitDescription';
import { addPageDescription } from '../../_components/PageDescription';
import { addReturnAll } from '../../_components/ReturnAllDescription';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['tags'],
		operation: ['getTags'],
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
	addReturnAll(displayOptions),
	addPageDescription({
		show: {
			...displayOptions.show,
			returnAll: [false],
		},
	}),
	addLimitDescription(displayOptions),
];

