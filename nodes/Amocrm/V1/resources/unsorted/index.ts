import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as create from './create';
import * as accept from './accept';
import * as link from './link';
import * as reject from './reject';
import * as summary from './summary';

export { get, create, accept, link, reject, summary };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['unsorted'],
			},
		},
		options: [
			{
				name: 'Accept',
				value: 'accept',
				action: 'Accept unsorted item',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create unsorted leads',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get unsorted leads',
			},
			{
				name: 'Link',
				value: 'link',
				action: 'Link unsorted item',
			},
			{
				name: 'Reject',
				value: 'reject',
				action: 'Reject unsorted item',
			},
			{
				name: 'Summary',
				value: 'summary',
				action: 'Get unsorted summary',
			},
		],
		default: 'get',
	},
	...get.description,
	...create.description,
	...accept.description,
	...link.description,
	...reject.description,
	...summary.description,
];