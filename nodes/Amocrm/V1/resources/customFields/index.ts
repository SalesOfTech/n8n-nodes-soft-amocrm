import { INodeProperties } from 'n8n-workflow';

import * as getCustomFields from './get';
import * as createCustomFields from './create';
import * as updateCustomFields from './update';

export { getCustomFields, createCustomFields, updateCustomFields };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customFields'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getCustomFields',
				action: 'Get custom fields',
			},
			{
				name: 'Create',
				value: 'createCustomFields',
				action: 'Create custom fields',
			},
			{
				name: 'Update',
				value: 'updateCustomFields',
				action: 'Update custom fields',
			},
		],
		default: 'getCustomFields',
	},
	...getCustomFields.description,
	...createCustomFields.description,
	...updateCustomFields.description,
];

