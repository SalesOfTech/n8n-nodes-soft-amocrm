import { IDisplayOptions } from 'n8n-workflow';
import { ILinksProperties } from '../../interfaces';
import { linkedEntityType } from '../entity';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['links'],
		operation: ['addLinks'],
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
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		default: '=[{"to_entity_id":1,"to_entity_type":"contacts","metadata":{"is_main":true}}]',
		required: true,
		displayOptions,
		description: 'JSON array/object for POST /api/v4/{entity_type}/{entity_id}/link',
	},
];

