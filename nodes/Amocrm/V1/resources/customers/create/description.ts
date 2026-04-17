import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ICustomersProperties } from '../../interfaces';
import { addJsonParametersDescription } from '../../_components/JsonParametersDescription';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customers'],
		operation: ['createCustomers'],
	},
};

const customerCreateModel: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Responsible User ID',
		name: 'responsible_user_id',
		type: 'number',
		default: 0,
	},
	{
		displayName: 'Next Price',
		name: 'next_price',
		type: 'number',
		default: 0,
	},
	{
		displayName: 'Next Date',
		name: 'next_date',
		type: 'dateTime',
		default: '',
	},
];

export const description: ICustomersProperties = [
	...addJsonParametersDescription(displayOptions),
	{
		displayName: 'Customers',
		name: 'collection',
		placeholder: 'Add customer',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				...displayOptions.show,
				json: [false],
			},
		},
		options: [
			{
				displayName: 'Customer',
				name: 'customer',
				values: customerCreateModel,
			},
		],
	},
];

