import { INodeProperties } from 'n8n-workflow';

import * as getCustomers from './get';
import * as createCustomers from './create';
import * as updateCustomers from './update';
import * as addCustomerTransaction from './addTransaction';
import * as removeCustomerTransaction from './removeTransaction';
import * as updateCustomerBonus from './updateBonus';

export {
	getCustomers,
	createCustomers,
	updateCustomers,
	addCustomerTransaction,
	removeCustomerTransaction,
	updateCustomerBonus,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customers'],
			},
		},
		options: [
			{
				name: 'Add Transaction',
				value: 'addCustomerTransaction',
				action: 'Add transaction to customer',
			},
			{
				name: 'Create Customers',
				value: 'createCustomers',
				action: 'Create customers',
			},
			{
				name: 'Get Customers',
				value: 'getCustomers',
				action: 'Get customers',
			},
			{
				name: 'Remove Transaction',
				value: 'removeCustomerTransaction',
				action: 'Remove customer transaction',
			},
			{
				name: 'Update Bonus',
				value: 'updateCustomerBonus',
				action: 'Update customer bonus points',
			},
			{
				name: 'Update Customers',
				value: 'updateCustomers',
				action: 'Update customers',
			},
		],
		default: 'getCustomers',
	},
	...getCustomers.description,
	...createCustomers.description,
	...updateCustomers.description,
	...addCustomerTransaction.description,
	...removeCustomerTransaction.description,
	...updateCustomerBonus.description,
];