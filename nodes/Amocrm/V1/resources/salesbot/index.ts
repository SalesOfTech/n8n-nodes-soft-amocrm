import { INodeProperties } from 'n8n-workflow';

import * as runSalesbot from './run';

export { runSalesbot };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['salesbot'],
			},
		},
		options: [{ name: 'Run', value: 'runSalesbot', action: 'Run salesbot' }],
		default: 'runSalesbot',
	},
	...runSalesbot.description,
];

