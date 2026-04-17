import { IDisplayOptions } from 'n8n-workflow';
import { IEventsProperties } from '../../interfaces';
import { addDateRangeDescription } from '../../_components/DateRangeDescription';
import { addFilterDescription } from '../../_components/FilterDescription';
import { addLimitDescription } from '../../_components/LimitDescription';
import { addPageDescription } from '../../_components/PageDescription';
import { addReturnAll } from '../../_components/ReturnAllDescription';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['events'],
		operation: ['getEvents'],
	},
};

export const description: IEventsProperties = [
	addReturnAll(displayOptions),
	addFilterDescription(displayOptions, [
		{
			displayName: 'Event IDs',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Comma-separated event IDs',
		},
		{
			displayName: 'Entity IDs',
			name: 'entity_id',
			type: 'string',
			default: '',
			description: 'Comma-separated entity IDs',
		},
		{
			displayName: 'Entity Type',
			name: 'entity_type',
			type: 'multiOptions',
			default: [],
			options: [
				{ name: 'Lead', value: 'lead' },
				{ name: 'Contact', value: 'contact' },
				{ name: 'Company', value: 'company' },
				{ name: 'Customer', value: 'customer' },
			],
		},
		{
			displayName: 'Types',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Comma-separated event types',
		},
		{
			displayName: 'Created By IDs',
			name: 'created_by',
			type: 'string',
			default: '',
			description: 'Comma-separated user IDs',
		},
		addDateRangeDescription('Created At', 'created_at'),
	]),
	addPageDescription({
		show: {
			...displayOptions.show,
			returnAll: [false],
		},
	}),
	addLimitDescription(displayOptions),
];

