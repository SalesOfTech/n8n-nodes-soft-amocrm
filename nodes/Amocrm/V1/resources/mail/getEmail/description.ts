import { IDisplayOptions } from 'n8n-workflow';
import { IMailProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['mail'],
		operation: ['getEmail'],
	},
};

export const description: IMailProperties = [
	{
		displayName: 'Account Email',
		name: 'account_email',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Thread ID',
		name: 'thread_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Message ID',
		name: 'message_id',
		type: 'string',
		default: '',
		displayOptions,
		description: 'If set, returns only matched message',
	},
];

