import { IDisplayOptions } from 'n8n-workflow';
import { ICustomersProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customers'],
		operation: ['addCustomerTransaction'],
	},
};

export const description: ICustomersProperties = [
	{
		displayName: 'Customer ID',
		name: 'customer_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default: '=[{"price":1000}]',
		required: true,
		displayOptions,
		description: 'JSON array/object for POST /api/v4/customers/{ID}/transactions',
	},
];

