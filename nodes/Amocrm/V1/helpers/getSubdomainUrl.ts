import { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions } from 'n8n-workflow';

export async function getSubdomainUrl(
	this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions,
	index = 0,
): Promise<string> {
	const authenticationMethod = this.getNodeParameter('authentication', index) as string;
	const credentialType =
		authenticationMethod === 'oAuth2' ? 'amocrmOAuth2Api' : 'amocrmLongLivedApi';
	const credentials = await this.getCredentials(credentialType);
	return `https://${credentials.subdomain}.amocrm.ru`;
}

