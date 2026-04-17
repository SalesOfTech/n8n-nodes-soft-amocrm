import { IDisplayOptions } from 'n8n-workflow';
import { ISalesbotProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['salesbot'],
		operation: ['runSalesbot'],
	},
};

export const description: ISalesbotProperties = [
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
	{
		displayName: 'Bot ID',
		name: 'bot_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
	{
		displayName: 'Entity Type',
		name: 'entity_type',
		type: 'number',
		default: 2,
		required: true,
		displayOptions,
		description: 'AmoCRM entity type numeric code',
	},
];

