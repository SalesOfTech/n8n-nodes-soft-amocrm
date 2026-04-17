import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequestByFullUrl } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scopeId = this.getNodeParameter('scopeId', index) as string;
	const chatId = this.getNodeParameter('chatId', index) as string;
	const withVideo = this.getNodeParameter('with_video', index) as boolean;
	const stand = this.getNodeParameter('stand', index) as string;
	const useAjaxHeader = this.getNodeParameter('useAjaxHeader', index) as boolean;
	const text = this.getNodeParameter('text', index) as string;
	const crmEntityId = this.getNodeParameter('crmEntityId', index) as number;
	const crmEntityType = this.getNodeParameter('crmEntityType', index) as number;
	const recipientId = this.getNodeParameter('recipientId', index) as string;
	const crmDialogId = this.getNodeParameter('crmDialogId', index) as number;
	const crmContactId = this.getNodeParameter('crmContactId', index) as number;
	const crmAccountId = this.getNodeParameter('crmAccountId', index) as number;
	const priority = this.getNodeParameter('priority', index) as string;
	const silent = this.getNodeParameter('silent', index) as boolean;
	const skipLinkShortener = this.getNodeParameter('skipLinkShortener', index) as boolean;
	const setPersonalization = this.getNodeParameter('setPersonalization', index) as boolean;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;

	const groupIdValue = (additionalOptions.groupId as string | undefined)?.trim();
	const personaName = (additionalOptions.personaName as string | undefined)?.trim();
	const personaAvatar = (additionalOptions.personaAvatar as string | undefined)?.trim();

	const body: IDataObject = {
		silent,
		priority,
		crm_entity: {
			id: crmEntityId,
			type: crmEntityType,
		},
		text,
		recipient_id: recipientId,
		group_id: groupIdValue || null,
		crm_dialog_id: crmDialogId,
		crm_contact_id: crmContactId,
		crm_account_id: crmAccountId,
		skip_link_shortener: skipLinkShortener,
		set_personalization: setPersonalization,
	};

	if (personaName) {
		body.persona_name = personaName;
	}

	if (personaAvatar) {
		body.persona_avatar = personaAvatar;
	}

	const qs = {
		with_video: withVideo,
		stand,
	} as IDataObject;

	const headers: IDataObject = {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'content-type': 'application/json',
	};

	if (useAjaxHeader) {
		headers['X-Requested-With'] = 'XMLHttpRequest';
	}

	const endpointUrl = `https://amojo.amocrm.ru/v1/chats/${scopeId}/${chatId}/messages`;
	const responseData = await apiRequestByFullUrl.call(this, 'POST', endpointUrl, body, qs, headers);
	return this.helpers.returnJsonArray(responseData);
}
