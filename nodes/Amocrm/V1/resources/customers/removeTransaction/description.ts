import { IDisplayOptions } from 'n8n-workflow';
import { ICustomersProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customers'],
		operation: ['removeCustomerTransaction'],
	},
};

export const description: ICustomersProperties = [
	{
		displayName: 'Transaction ID',
		name: 'transaction_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
];

