import { INodeProperties } from 'n8n-workflow';

import * as getLeadEventsTimeline from './getLeadEventsTimeline';
import * as getMultiactionStatus from './getMultiactionStatus';

export { getLeadEventsTimeline, getMultiactionStatus };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ajax'],
			},
		},
		options: [
			{
				name: 'Get Lead Events Timeline',
				value: 'getLeadEventsTimeline',
				action: 'Get lead events timeline via ajax',
			},
			{
				name: 'Get Multiaction Status',
				value: 'getMultiactionStatus',
				action: 'Get multiaction status via ajax',
			},
		],
		default: 'getLeadEventsTimeline',
	},
	...getLeadEventsTimeline.description,
	...getMultiactionStatus.description,
];

