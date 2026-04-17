import { IDisplayOptions } from 'n8n-workflow';
import { IUnsortedProperties } from '../../interfaces';
import { addFilterDescription } from '../../_components/FilterDescription';
import { addLimitDescription } from '../../_components/LimitDescription';
import { addPageDescription } from '../../_components/PageDescription';
import { addReturnAll } from '../../_components/ReturnAllDescription';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['unsorted'],
		operation: ['get'],
	},
};

export const description: IUnsortedProperties = [
	addReturnAll(displayOptions),
	addFilterDescription(displayOptions, [
		{
			displayName: 'UIDs',
			name: 'uid',
			type: 'string',
			default: '',
			description: 'Comma-separated unsorted item UIDs',
		},
		{
			displayName: 'Pipeline IDs',
			name: 'pipeline_id',
			type: 'string',
			default: '',
			description: 'Comma-separated pipeline IDs',
		},
		{
			displayName: 'Category',
			name: 'category',
			type: 'options',
			default: 'forms',
			options: [
				{ name: 'Calls', value: 'sip' },
				{ name: 'Chats', value: 'chats' },
				{ name: 'Forms', value: 'forms' },
				{ name: 'Mail', value: 'mail' },
			],
		},
	]),
	addPageDescription({
		show: {
			...displayOptions.show,
			returnAll: [false],
		},
	}),
	addLimitDescription(displayOptions),
];

