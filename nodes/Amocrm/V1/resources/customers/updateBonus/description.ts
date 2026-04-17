import { IDisplayOptions } from 'n8n-workflow';
import { ICustomersProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customers'],
		operation: ['updateCustomerBonus'],
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
			rows: 4,
		},
		default: '={"bonus_points":100}',
		required: true,
		displayOptions,
		description: 'JSON object for PATCH /api/v4/customers/{ID}/bonus_points',
	},
];

