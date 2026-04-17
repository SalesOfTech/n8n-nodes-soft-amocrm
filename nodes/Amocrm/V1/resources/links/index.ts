import { INodeProperties } from 'n8n-workflow';

import * as getLinks from './get';
import * as addLinks from './add';

export { getLinks, addLinks };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['links'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getLinks',
				action: 'Get entity links',
			},
			{
				name: 'Add',
				value: 'addLinks',
				action: 'Add entity links',
			},
		],
		default: 'getLinks',
	},
	...getLinks.description,
	...addLinks.description,
];

