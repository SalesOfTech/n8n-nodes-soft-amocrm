import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { IAmo } from './interfaces';

import * as account from './account';
import * as contacts from './contacts';
import * as leads from './leads';
import * as tasks from './tasks';
import * as companies from './companies';
import * as notes from './notes';
import * as catalogs from './catalogs';
import * as unsorted from './unsorted';
import * as pipelines from './pipelines';
import * as statuses from './statuses';
import * as webhooks from './webhooks';
import * as links from './links';
import * as events from './events';
import * as amojo from './amojo';
import * as customers from './customers';
import * as customFields from './customFields';
import * as tags from './tags';
import * as merge from './merge';
import * as talks from './talks';
import * as salesbot from './salesbot';
import * as shortLinks from './shortLinks';
import * as mail from './mail';
import * as ajax from './ajax';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<IAmo>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		const amo = {
			resource,
			operation,
		} as IAmo;

		try {
			if (amo.resource === 'account') {
				responseData = await account[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'contacts') {
				responseData = await contacts[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'leads') {
				responseData = await leads[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'tasks') {
				responseData = await tasks[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'companies') {
				responseData = await companies[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'notes') {
				responseData = await notes[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'catalogs') {
				responseData = await catalogs[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'unsorted') {
				responseData = await unsorted[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'pipelines') {
				responseData = await pipelines[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'statuses') {
				responseData = await statuses[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'webhooks') {
				responseData = await webhooks[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'links') {
				responseData = await links[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'events') {
				responseData = await events[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'amojo') {
				responseData = await amojo[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'customers') {
				responseData = await customers[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'customFields') {
				responseData = await customFields[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'tags') {
				responseData = await tags[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'merge') {
				responseData = await merge[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'talks') {
				responseData = await talks[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'salesbot') {
				responseData = await salesbot[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'shortLinks') {
				responseData = await shortLinks[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'mail') {
				responseData = await mail[amo.operation].execute.call(this, i);
			} else if (amo.resource === 'ajax') {
				responseData = await ajax[amo.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
