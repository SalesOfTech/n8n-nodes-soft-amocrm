import { IDisplayOptions } from 'n8n-workflow';
import { ITalksProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['talks'],
		operation: ['getChats'],
	},
};

export const description: ITalksProperties = [
	{
		displayName: 'Chat IDs',
		name: 'chat_ids',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
		description: 'Comma-separated chat IDs',
	},
];

