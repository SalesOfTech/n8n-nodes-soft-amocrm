import { INodeProperties } from 'n8n-workflow';

import * as getMergeLeadsInfo from './getMergeLeadsInfo';
import * as saveMergeLeads from './saveMergeLeads';
import * as getMergeContactsInfo from './getMergeContactsInfo';
import * as saveMergeContacts from './saveMergeContacts';

export { getMergeLeadsInfo, saveMergeLeads, getMergeContactsInfo, saveMergeContacts };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['merge'],
			},
		},
		options: [
			{ name: 'Get Merge Leads Info', value: 'getMergeLeadsInfo', action: 'Get merge leads info' },
			{ name: 'Save Merge Leads', value: 'saveMergeLeads', action: 'Save merge leads' },
			{
				name: 'Get Merge Contacts Info',
				value: 'getMergeContactsInfo',
				action: 'Get merge contacts info',
			},
			{ name: 'Save Merge Contacts', value: 'saveMergeContacts', action: 'Save merge contacts' },
		],
		default: 'getMergeLeadsInfo',
	},
	...getMergeLeadsInfo.description,
	...saveMergeLeads.description,
	...getMergeContactsInfo.description,
	...saveMergeContacts.description,
];

