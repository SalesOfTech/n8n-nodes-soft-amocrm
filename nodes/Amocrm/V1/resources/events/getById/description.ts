import { IDisplayOptions } from 'n8n-workflow';
import { IEventsProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['events'],
		operation: ['getEventById'],
	},
};

export const description: IEventsProperties = [
	{
		displayName: 'Event ID',
		name: 'event_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
];

