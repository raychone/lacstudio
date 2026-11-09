# Deployment and contact configuration

Local development:

```sh
npm run dev
```

Build the production bundle with `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to the verified production origin before deployment; it enables absolute sitemap URLs. Do not set a guessed domain.

The contact endpoint currently validates the body with Zod, uses a hidden honeypot and applies a simple per-process rate limit. It deliberately returns `503` because no approved delivery provider, sender identity or secret has been configured. Before enabling delivery, add a server-only provider integration, secret configuration, durable rate limiting appropriate to the host, verified destination handling and a privacy-notice update. Do not change the success UI before a message is actually accepted by the provider.

Before a public launch, provide verified legal entity details, privacy-controller details, a contact channel, approved project media and public copy. The current portfolio is not production-ready until those items are supplied.
