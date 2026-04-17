import { INodeProperties } from 'n8n-workflow';

import * as getTags from './get';
import * as createTags from './create';

export { getTags, createTags };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tags'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getTags',
				action: 'Get tags',
			},
			{
				name: 'Create',
				value: 'createTags',
				action: 'Create tags',
			},
		],
		default: 'getTags',
	},
	...getTags.description,
	...createTags.description,
];

