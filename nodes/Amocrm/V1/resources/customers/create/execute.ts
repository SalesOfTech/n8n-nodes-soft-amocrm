import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { clearNullableProps } from '../../../helpers/clearNullableProps';
import { getTimestampFromDateString } from '../../../helpers/getTimestampFromDateString';
import { apiRequest } from '../../../transport';

interface IForm {
	customer: Array<{
		name?: string;
		responsible_user_id?: number;
		next_price?: number;
		next_date?: string;
	}>;
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const requestMethod = 'POST';
	const endpoint = 'customers';
	const jsonParams = this.getNodeParameter('json', index) as boolean;

	if (jsonParams) {
		const jsonString = this.getNodeParameter('jsonString', index) as string;
		const responseData = await apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
		return this.helpers.returnJsonArray(responseData);
	}

	const collection = this.getNodeParameter('collection', index) as IForm;
	const body = collection.customer
		.map((customer) => ({
			...customer,
			next_date: getTimestampFromDateString(customer.next_date),
		}))
		.map(clearNullableProps);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(responseData);
}

