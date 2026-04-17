# n8n-nodes-soft-amocrm

SOFT fork of the original `n8n-nodes-amocrm` community node for n8n.

Fork credits:
- Original project author: Yaroslav Tolstoy (`@yatolstoy`)
- This fork extends operations and maintenance for SOFT use cases

## What This Fork Adds

Besides base AmoCRM resources, this fork includes:

- `unsorted`, `pipelines`, `statuses`
- `webhooks`, `links`, `events`
- `amojo` (send message endpoint)
- `customers` + transactions + bonus points
- `customFields`, `tags`
- `merge` (leads/contacts merge info + save)
- `talks`, `salesbot`, `shortLinks`, `mail`
- `ajax` helpers (lead timeline, multiaction status)
- transport retry/backoff for `429/5xx` with `Retry-After` support

## Installation In n8n

Install as a community node:

1. Open **Settings -> Community Nodes**
2. Click **Install**
3. Enter package name: `n8n-nodes-soft-amocrm`
4. Confirm risks and install

Node name in n8n UI:
- Display name: `Soft AmoCRM`
- Node id: `softAmocrm`

## Credentials

Supported auth modes:
- OAuth2 credential (`amocrmOAuth2Api`)
- Long-lived token credential (`amocrmLongLivedApi`)

## Publish To npm (for community install)

1. Prepare account:
- `npm login`
- Ensure package name is free: `npm view n8n-nodes-soft-amocrm`

2. Build and check:
- `npm install`
- `npm run build`
- `npm run lint`

3. Publish:
- `npm publish --access public`

4. Verify:
- `npm view n8n-nodes-soft-amocrm version`
- Install it in n8n via Community Nodes

## Local Install Without npm Publish

From n8n host:

1. Build this project:
- `npm install`
- `npm run build`

2. Copy package folder into n8n custom nodes location and restart n8n

Alternative for local testing:
- `npm pack`
- install produced `.tgz` on n8n host

## Ethics / Attribution Note

Best practice for forks:
- keep original attribution visible
- use a distinct package name
- avoid impersonating original author identity

This fork follows that approach.

