import { IDisplayOptions } from 'n8n-workflow';
import { ILinksProperties } from '../../interfaces';
import { linkedEntityType } from '../entity';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['links'],
		operation: ['getLinks'],
	},
};

export const description: ILinksProperties = [
	linkedEntityType(displayOptions),
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
];

