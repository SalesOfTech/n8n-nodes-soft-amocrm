import { IDisplayOptions } from 'n8n-workflow';
import { IAmojoProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['amojo'],
		operation: ['sendMessage'],
	},
};

export const description: IAmojoProperties = [
	{
		displayName: 'Scope ID',
		name: 'scopeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
		description: 'First ID from /v1/chats/{scopeId}/{chatId}/messages',
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
		description: 'Second ID from /v1/chats/{scopeId}/{chatId}/messages',
	},
	{
		displayName: 'With Video',
		name: 'with_video',
		type: 'boolean',
		default: true,
		displayOptions,
	},
	{
		displayName: 'Stand',
		name: 'stand',
		type: 'string',
		default: 'v16',
		displayOptions,
	},
	{
		displayName: 'Use AJAX Header',
		name: 'useAjaxHeader',
		type: 'boolean',
		default: true,
		displayOptions,
		description: 'Whether to add X-Requested-With: XMLHttpRequest header',
	},
	{
		displayName: 'Payload JSON',
		name: 'payloadJson',
		type: 'string',
		typeOptions: {
			rows: 8,
		},
		default:
			'={"silent":false,"priority":"low","crm_entity":{"id":0,"type":2},"text":"TEST","recipient_id":"","group_id":null,"crm_dialog_id":0,"crm_contact_id":0,"crm_account_id":0,"skip_link_shortener":true,"set_personalization":false}',
		required: true,
		displayOptions,
		description: 'Message payload for amojo endpoint',
	},
];
