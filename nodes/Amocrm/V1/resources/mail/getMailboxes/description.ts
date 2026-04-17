import { IDisplayOptions } from 'n8n-workflow';
import { IMailProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['mail'],
		operation: ['getMailboxes'],
	},
};

export const description: IMailProperties = [
	{
		displayName: 'Account ID',
		name: 'account_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Only Active',
		name: 'only_active',
		type: 'boolean',
		default: true,
		displayOptions,
		description: 'Whether to filter parser=false and state=complete like in PHP class',
	},
];
