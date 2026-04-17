import { IDisplayOptions } from 'n8n-workflow';
import { IUnsortedProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['unsorted'],
		operation: ['summary'],
	},
};

export const description: IUnsortedProperties = [
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		default: 'forms',
		displayOptions,
		options: [
			{ name: 'Calls', value: 'sip' },
			{ name: 'Chats', value: 'chats' },
			{ name: 'Forms', value: 'forms' },
			{ name: 'Mail', value: 'mail' },
		],
	},
];

