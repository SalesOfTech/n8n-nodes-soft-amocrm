import { IDisplayOptions } from 'n8n-workflow';
import { IAjaxProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['ajax'],
		operation: ['getLeadEventsTimeline'],
	},
};

export const description: IAjaxProperties = [
	{
		displayName: 'Lead ID',
		name: 'lead_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		default: 50,
		required: true,
		displayOptions,
	},
];

