import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as create from './create';
import * as update from './update';
import * as remove from './remove';

export { get, create, update, remove };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['statuses'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get statuses for pipeline',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create statuses for pipeline',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update statuses for pipeline',
			},
			{
				name: 'Delete',
				value: 'remove',
				action: 'Delete status from pipeline',
			},
		],
		default: 'get',
	},
	...get.description,
	...create.description,
	...update.description,
	...remove.description,
];

