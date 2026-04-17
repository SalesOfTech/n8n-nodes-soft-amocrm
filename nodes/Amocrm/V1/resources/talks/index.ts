import { INodeProperties } from 'n8n-workflow';

import * as getTalkById from './getTalkById';
import * as getChats from './getChats';

export { getTalkById, getChats };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['talks'],
			},
		},
		options: [
			{ name: 'Get Talk By ID', value: 'getTalkById', action: 'Get talk by ID' },
			{ name: 'Get Chats', value: 'getChats', action: 'Get chats by i ds' },
		],
		default: 'getTalkById',
	},
	...getTalkById.description,
	...getChats.description,
];

