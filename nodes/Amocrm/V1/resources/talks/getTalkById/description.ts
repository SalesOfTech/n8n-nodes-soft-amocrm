import { IDisplayOptions } from 'n8n-workflow';
import { ITalksProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['talks'],
		operation: ['getTalkById'],
	},
};

export const description: ITalksProperties = [
	{
		displayName: 'Talk ID',
		name: 'talk_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
];

