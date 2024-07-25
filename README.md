# next-pwa-spike

Not to be confused with [next-pwa](https://github.com/shadowwalker/next-pwa). This is a spike project to test the capability of [nextjs](http://nextjs.org) with PWA.
Here Im using [serwist](https://serwist.pages.dev) for the PWA library.

## The scope - What are we testing

We are looking at how is the user experience will be for PWA app when on the following scenarios:

1. a CSR (Client Side Rendered) page is making a HTTP GET Request
2. an SSR (Server Side Rendered) page is making a HTTP GET Request
3. a CSR (Client Side Rendered) page is making a HTTP POST Request - Can the app cache the mutatead data when offline, and resume submitting the request when back online

## Getting Started

First, make sure to install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
