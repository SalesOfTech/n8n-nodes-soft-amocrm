import { IDisplayOptions } from 'n8n-workflow';
import { ICustomersProperties } from '../../interfaces';
import { addFilterDescription } from '../../_components/FilterDescription';
import { addLimitDescription } from '../../_components/LimitDescription';
import { addPageDescription } from '../../_components/PageDescription';
import { addReturnAll } from '../../_components/ReturnAllDescription';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['customers'],
		operation: ['getCustomers'],
	},
};

export const description: ICustomersProperties = [
	addReturnAll(displayOptions),
	addFilterDescription(displayOptions, [
		{
			displayName: 'Query',
			name: 'query',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Customer IDs',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Comma-separated customer IDs',
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

