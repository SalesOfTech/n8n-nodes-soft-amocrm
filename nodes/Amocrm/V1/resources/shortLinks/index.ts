import { INodeProperties } from 'n8n-workflow';

import * as createShortLink from './create';

export { createShortLink };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['shortLinks'],
			},
		},
		options: [{ name: 'Create', value: 'createShortLink', action: 'Create short link' }],
		default: 'createShortLink',
	},
	...createShortLink.description,
];

