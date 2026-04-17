import { IDisplayOptions } from 'n8n-workflow';
import { IAmojoProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['amojo'],
		operation: ['connectChatChannel'],
	},
};

export const description: IAmojoProperties = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		displayOptions,
		description: 'Chat channel ID from amoCRM support registration',
	},
	{
		displayName: 'Channel Secret',
		name: 'channelSecret',
		type: 'string',
		typeOptions: {
			password: true,
		},
		required: true,
		default: '',
		displayOptions,
		description: 'Secret key used to sign Chat API requests',
	},
	{
		displayName: 'Chat Account ID',
		name: 'chatAccountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions,
		description: 'Account ID in Chat API format (UUID, not CRM numeric account ID)',
	},
	{
		displayName: 'Hook API Version',
		name: 'hookApiVersion',
		type: 'options',
		options: [
			{
				name: 'V1',
				value: 'v1',
			},
			{
				name: 'V2',
				value: 'v2',
			},
		],
		default: 'v2',
		displayOptions,
		description: 'Webhook version used for outgoing manager messages',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions,
		description: 'Optional channel title shown in account',
	},
	{
		displayName: 'Disable Time Window',
		name: 'disableTimeWindow',
		type: 'boolean',
		default: false,
		displayOptions,
		description: 'Whether to disable response time window for this account',
	},
];
