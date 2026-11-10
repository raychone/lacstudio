# LAC Studio

Portfolio and product-development studio website, built with React, Vinext, Vite and Nitro.

## Local development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:5173` by default.

## Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

The repository includes `vercel.json`. Import the repository in Vercel and deploy with Node.js 22 or newer. Vercel runs `npm run build`; Nitro generates the required Vercel Build Output API artifact automatically.

## Useful routes

- `/` — portfolio homepage
- `/work` — project index and case studies
- `/process` — product-development process
- `/services` — services
- `/contact` — project enquiry form
- `/lab` — five-design system playground
