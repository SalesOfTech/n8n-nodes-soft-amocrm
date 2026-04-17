import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';

export function resolveCustomFieldsEndpoint(
	context: IExecuteFunctions,
	index: number,
	entityType: string,
): string {
	if (entityType === 'catalogs') {
		const catalogId = context.getNodeParameter('catalog_id', index) as number | string;
		if (!catalogId) {
			throw new NodeOperationError(context.getNode(), 'Catalog ID is required for catalogs');
		}
		return `catalogs/${catalogId}/custom_fields`;
	}
	return `${entityType}/custom_fields`;
}

