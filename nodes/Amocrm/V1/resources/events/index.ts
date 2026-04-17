import { INodeProperties } from 'n8n-workflow';

import * as getEvents from './get';
import * as getEventById from './getById';

export { getEvents, getEventById };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['events'],
			},
		},
		options: [
			{
				name: 'Get List',
				value: 'getEvents',
				action: 'Get events',
			},
			{
				name: 'Get By ID',
				value: 'getEventById',
				action: 'Get event by ID',
			},
		],
		default: 'getEvents',
	},
	...getEvents.description,
	...getEventById.description,
];

