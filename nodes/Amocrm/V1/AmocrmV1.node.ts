/* eslint-disable n8n-nodes-base/node-filename-against-convention */
/* eslint-disable n8n-nodes-base/node-filename-against-convention */
/* eslint-disable n8n-nodes-base/node-filename-against-convention */
/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import {
	IExecuteFunctions,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';
import * as loadOptions from './methods';
import { router } from './resources/router';

import * as account from './resources/account';
import * as contacts from './resources/contacts';
import * as leads from './resources/leads';
import * as tasks from './resources/tasks';
import * as companies from './resources/companies';
import * as notes from './resources/notes';
import * as catalogs from './resources/catalogs';
import * as unsorted from './resources/unsorted';
import * as pipelines from './resources/pipelines';
import * as statuses from './resources/statuses';
import * as webhooks from './resources/webhooks';
import * as links from './resources/links';
import * as events from './resources/events';
import * as amojo from './resources/amojo';
import * as customers from './resources/customers';
import * as customFields from './resources/customFields';
import * as tags from './resources/tags';
import * as merge from './resources/merge';
import * as talks from './resources/talks';
import * as salesbot from './resources/salesbot';
import * as shortLinks from './resources/shortLinks';
import * as mail from './resources/mail';
import * as ajax from './resources/ajax';

export class AmocrmV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			displayName: 'Soft AmoCRM',
			name: 'softAmocrm',
			icon: 'file:amocrm_logo.svg',
			group: ['output'],
			version: 1,
			subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
			description: 'Consume AmoCRM API',
			defaults: {
				name: 'AmoCRM API Node',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'amocrmOAuth2Api',
					required: true,
					displayOptions: {
						show: {
							authentication: ['oAuth2'],
						},
					},
				},
				{
					name: 'amocrmLongLivedApi',
					required: true,
					displayOptions: {
						show: {
							authentication: ['longLivedToken'],
						},
					},
					testedBy: {
						request: {
							method: 'GET',
							url: 'account',
						},
					},
				},
			],
			properties: [
				{
					displayName: 'Authentication',
					name: 'authentication',
					type: 'options',
					options: [
						{
							name: 'Long Lived Token',
							value: 'longLivedToken',
						},
						{
							name: 'OAuth2',
							value: 'oAuth2',
						},
					],
					default: 'oAuth2',
				},
				{
					displayName: 'Resource',
					name: 'resource',
					type: 'options',
					noDataExpression: true,
					options: [
						{
							name: 'Account',
							value: 'account',
						},
						{
							name: 'AJAX',
							value: 'ajax',
						},
						{
							name: 'Amojo',
							value: 'amojo',
						},
						{
							name: 'Catalog',
							value: 'catalogs',
						},
						{
							name: 'Company',
							value: 'companies',
						},
						{
							name: 'Contact',
							value: 'contacts',
						},
						{
							name: 'Custom Field',
							value: 'customFields',
						},
						{
							name: 'Customer',
							value: 'customers',
						},
						{
							name: 'Event',
							value: 'events',
						},
						{
							name: 'Lead',
							value: 'leads',
						},
						{
							name: 'Link',
							value: 'links',
						},
						{
							name: 'Mail',
							value: 'mail',
						},
						{
							name: 'Merge',
							value: 'merge',
						},
						{
							name: 'Note',
							value: 'notes',
						},
						{
							name: 'Pipeline',
							value: 'pipelines',
						},
						{
							name: 'Salesbot',
							value: 'salesbot',
						},
						{
							name: 'Short Link',
							value: 'shortLinks',
						},
						{
							name: 'Status',
							value: 'statuses',
						},
						{
							name: 'Tag',
							value: 'tags',
						},
						{
							name: 'Talk',
							value: 'talks',
						},
						{
							name: 'Task',
							value: 'tasks',
						},
						{
							name: 'Unsorted',
							value: 'unsorted',
						},
						{
							name: 'Webhook',
							value: 'webhooks',
						},
					],
					default: 'account',
				},
				...account.descriptions,
				...companies.descriptions,
				...contacts.descriptions,
				...leads.descriptions,
				...tasks.descriptions,
				...notes.descriptions,
				...catalogs.descriptions,
				...unsorted.descriptions,
				...pipelines.descriptions,
				...statuses.descriptions,
				...webhooks.descriptions,
				...links.descriptions,
				...events.descriptions,
				...amojo.descriptions,
				...customers.descriptions,
				...customFields.descriptions,
				...tags.descriptions,
				...merge.descriptions,
				...talks.descriptions,
				...salesbot.descriptions,
				...shortLinks.descriptions,
				...mail.descriptions,
				...ajax.descriptions,
			],
		};
	}

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return router.call(this);
	}
}