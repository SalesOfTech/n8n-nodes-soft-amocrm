import { IDisplayOptions } from 'n8n-workflow';
import { IAmojoProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['amojo'],
		operation: ['sendChatApiMessage'],
	},
};

export const description: IAmojoProperties = [
	{
		displayName: 'Scope ID',
		name: 'scopeId',
		type: 'string',
		required: true,
		default: '',
		displayOptions,
		description: 'Scope ID returned by Connect Channel method',
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
		displayName: 'Conversation ID',
		name: 'conversationId',
		type: 'string',
		required: true,
		default: '',
		displayOptions,
		description: 'Conversation ID in your integration. Usually map from message[add][0][chat_id].',
	},
	{
		displayName: 'Receiver ID',
		name: 'receiverId',
		type: 'string',
		required: true,
		default: '',
		displayOptions,
		description: 'External user ID. Usually map from message[add][0][author] field.',
	},
	{
		displayName: 'Message Text',
		name: 'messageText',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		required: true,
		default: '',
		displayOptions,
		description: 'AI-generated reply text',
	},
	{
		displayName: 'Sender ID',
		name: 'senderId',
		type: 'string',
		required: true,
		default: 'n8n-bot',
		displayOptions,
		description: 'Integration-side sender ID (bot or mapped manager)',
	},
	{
		displayName: 'Sender Name',
		name: 'senderName',
		type: 'string',
		required: true,
		default: 'AI Assistant',
		displayOptions,
		description: 'Display name of sender',
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		displayOptions,
		description: 'Optional integration message ID. If empty, generated automatically.',
	},
	{
		displayName: 'Silent',
		name: 'silent',
		type: 'boolean',
		default: true,
		displayOptions,
		description: 'Whether to avoid creating unsorted and notifications',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions,
		options: [
			{
				displayName: 'Receiver Name',
				name: 'receiverName',
				type: 'string',
				default: '',
				description: 'Optional receiver name',
			},
			{
				displayName: 'Sender Ref ID',
				name: 'senderRefId',
				type: 'string',
				default: '',
				description: 'Optional amoCRM sender ref_id (for manager mapping)',
			},
			{
				displayName: 'Receiver Ref ID',
				name: 'receiverRefId',
				type: 'string',
				default: '',
				description: 'Optional amoCRM receiver ref_id',
			},
		],
	},
];
