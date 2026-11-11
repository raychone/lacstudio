# Production contact form

The contact form is implemented server-side in `app/api/contact/route.ts`. It only reports itself as available when all Resend and Upstash Redis environment variables below are present. Until then, the site leaves the form unavailable and the `contact@lacstudio.ro` mail link remains usable.

## 1. Resend and the sending domain

1. Create a Resend account and add `lacstudio.ro` as a sending domain.
2. In Resend, copy the exact DNS records shown for that domain into the DNS provider. Wait for Resend to mark the domain as verified.
3. Create a Resend API key restricted to sending email. It is a server secret.

LeafMail continues to receive mail. Keep its MX records. Do **not** create a second SPF TXT record: DNS permits one SPF TXT record only. Add Resend's SPF mechanism to the existing LeafMail SPF policy only when Resend explicitly instructs it, and add Resend DKIM records alongside LeafMail DKIM and the existing DMARC record. Follow the record names and values shown by Resend rather than substituting guessed values.

The configured sender must be `LAC STUDIO <contact@lacstudio.ro>` after Resend verifies the domain. The recipient remains `contact@lacstudio.ro`; Resend delivers there and LeafMail receives it.

## 2. Durable rate limit

Create an Upstash Redis database and copy its REST URL and REST token. The endpoint uses Upstash atomically for a fixed-window limit of five submissions per hashed client address every ten minutes. It fails closed when Upstash is unavailable, so a stateless Vercel instance never falls back to an in-memory-only limit.

## 3. Vercel configuration

In Vercel → Project → Settings → Environment Variables, add the following for Production (and Preview too only if you intend to test Preview):

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Resend API key beginning with `re_` |
| `CONTACT_TO_EMAIL` | `contact@lacstudio.ro` |
| `CONTACT_FROM_EMAIL` | `LAC STUDIO <contact@lacstudio.ro>` |
| `UPSTASH_REDIS_REST_URL` | Upstash REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash REST token |

These values are server-only. Do not use `VITE_` or `NEXT_PUBLIC_` prefixes, commit a `.env` file, or place a key in browser code. Redeploy after adding or changing them.

## 4. Deployment and verification

1. Configure DNS and wait for Resend's verified-domain status.
2. Configure the five Vercel variables and deploy the committed revision.
3. Open `/contact`; after its availability check, the submit control should enable.
4. Submit a real, non-sensitive test inquiry using a separate inbox. Confirm the form's success notice first (Resend accepted the request), then confirm the email arrives in `contact@lacstudio.ro` and reply to it to verify Reply-To.
5. Inspect the message for the name, visitor email, project type, message, locale and UTC submission time.

A success notice means Resend accepted the message for delivery; it does not by itself prove inbox delivery. The form must not be described as production-functional until the real-inbox test succeeds.

## 5. Privacy and safe disablement

The privacy copy now states that enabled submissions are sent to Resend and are not stored in an application database. Before public promotion, complete the still-pending legal information: controller identity, processing purpose, retention period, legal basis and up-to-date provider details. This is implementation guidance, not legal advice.

To disable delivery safely, remove `RESEND_API_KEY` (or any required contact/rate-limit variable) from Vercel and redeploy. The endpoint returns a truthful unavailable response and the page keeps the direct email path. Do not remove LeafMail MX records to disable the form.
