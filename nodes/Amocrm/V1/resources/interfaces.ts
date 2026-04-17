import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type IAmoMap = {
	account: 'getInfo';
	leads: 'getLeads' | 'createLeads' | 'updateLeads';
	contacts: 'getContacts' | 'createContacts' | 'updateContacts';
	companies: 'getCompany' | 'createCompany' | 'updateCompany';
	notes: 'getNotes' | 'createNotes' | 'updateNotes';
	unsorted: 'get' | 'create' | 'accept' | 'link' | 'reject' | 'summary';
	pipelines: 'get' | 'create' | 'update' | 'remove';
	statuses: 'get' | 'create' | 'update' | 'remove';
	tasks: 'getTasks' | 'createTasks' | 'updateTasks';
	webhooks: 'getWebhooks' | 'addOrUpdateWebhooks';
	links: 'getLinks' | 'addLinks';
	events: 'getEvents' | 'getEventById';
	amojo: 'connectChatChannel' | 'sendChatApiMessage';
	customers:
		| 'getCustomers'
		| 'createCustomers'
		| 'updateCustomers'
		| 'addCustomerTransaction'
		| 'removeCustomerTransaction'
		| 'updateCustomerBonus';
	customFields: 'getCustomFields' | 'createCustomFields' | 'updateCustomFields';
	tags: 'getTags' | 'createTags';
	merge:
		| 'getMergeLeadsInfo'
		| 'saveMergeLeads'
		| 'getMergeContactsInfo'
		| 'saveMergeContacts';
	talks: 'getTalkById' | 'getChats';
	salesbot: 'runSalesbot';
	shortLinks: 'createShortLink';
	mail: 'getEmail' | 'getMailboxes';
	ajax: 'getLeadEventsTimeline' | 'getMultiactionStatus';
	catalogs:
		| 'getCatalogs'
		| 'addCatalogs'
		| 'updateCatalogs'
		| 'getCatalogElements'
		| 'addCatalogElements'
		| 'updateCatalogElements';
};

export type IAmo = AllEntities<IAmoMap>;

export type IAccountAmo = Entity<IAmoMap, 'account'>;
export type ILeadsAmo = Entity<IAmoMap, 'leads'>;
export type IContactsAmo = Entity<IAmoMap, 'contacts'>;
export type ICompaniesAmo = Entity<IAmoMap, 'companies'>;
export type IUnsortedAmo = Entity<IAmoMap, 'unsorted'>;
export type IPipelinesAmo = Entity<IAmoMap, 'pipelines'>;
export type IStatusesAmo = Entity<IAmoMap, 'statuses'>;
export type ITasksAmo = Entity<IAmoMap, 'tasks'>;
export type INotesAmo = Entity<IAmoMap, 'notes'>;
export type ICatalogsAmo = Entity<IAmoMap, 'catalogs'>;
export type IWebhooksAmo = Entity<IAmoMap, 'webhooks'>;
export type ILinksAmo = Entity<IAmoMap, 'links'>;
export type IEventsAmo = Entity<IAmoMap, 'events'>;
export type IAmojoAmo = Entity<IAmoMap, 'amojo'>;
export type ICustomersAmo = Entity<IAmoMap, 'customers'>;
export type ICustomFieldsAmo = Entity<IAmoMap, 'customFields'>;
export type ITagsAmo = Entity<IAmoMap, 'tags'>;
export type IMergeAmo = Entity<IAmoMap, 'merge'>;
export type ITalksAmo = Entity<IAmoMap, 'talks'>;
export type ISalesbotAmo = Entity<IAmoMap, 'salesbot'>;
export type IShortLinksAmo = Entity<IAmoMap, 'shortLinks'>;
export type IMailAmo = Entity<IAmoMap, 'mail'>;
export type IAjaxAmo = Entity<IAmoMap, 'ajax'>;

export type IAccountProperties = PropertiesOf<IAccountAmo>;
export type ILeadsProperties = PropertiesOf<ILeadsAmo>;
export type IContactsProperties = PropertiesOf<IContactsAmo>;
export type ICompaniesProperties = PropertiesOf<ICompaniesAmo>;
export type IUnsortedProperties = PropertiesOf<IUnsortedAmo>;
export type IPipelinesProperties = PropertiesOf<IPipelinesAmo>;
export type IStatusesProperties = PropertiesOf<IStatusesAmo>;
export type ICatalogsProperties = PropertiesOf<ICatalogsAmo>;
export type ITasksProperties = PropertiesOf<ITasksAmo>;
export type INotesProperties = PropertiesOf<INotesAmo>;
export type IWebhooksProperties = PropertiesOf<IWebhooksAmo>;
export type ILinksProperties = PropertiesOf<ILinksAmo>;
export type IEventsProperties = PropertiesOf<IEventsAmo>;
export type IAmojoProperties = PropertiesOf<IAmojoAmo>;
export type ICustomersProperties = PropertiesOf<ICustomersAmo>;
export type ICustomFieldsProperties = PropertiesOf<ICustomFieldsAmo>;
export type ITagsProperties = PropertiesOf<ITagsAmo>;
export type IMergeProperties = PropertiesOf<IMergeAmo>;
export type ITalksProperties = PropertiesOf<ITalksAmo>;
export type ISalesbotProperties = PropertiesOf<ISalesbotAmo>;
export type IShortLinksProperties = PropertiesOf<IShortLinksAmo>;
export type IMailProperties = PropertiesOf<IMailAmo>;
export type IAjaxProperties = PropertiesOf<IAjaxAmo>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
