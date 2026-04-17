import { IDisplayOptions, INodeProperties } from 'n8n-workflow';

export const linkedEntityType = (displayOptions: IDisplayOptions | undefined): INodeProperties => ({
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
});

