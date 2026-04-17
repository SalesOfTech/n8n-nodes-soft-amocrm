import { IDisplayOptions } from 'n8n-workflow';
import { IAjaxProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['ajax'],
		operation: ['getMultiactionStatus'],
	},
};

export const description: IAjaxProperties = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions,
	},
];

