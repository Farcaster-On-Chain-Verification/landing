
# Farcaster On-Chain Verification Landing Page

Welcome to the landing page for the Farcaster On-Chain Verification project, which ensures secure identity verification for **Farcaster** users participating in decentralized networks. Our goal is to help build a trusted, Sybil-resistant environment for the community.

## Getting Started

### Setup

First, clone the repository and navigate into the project directory:

```bash
git clone --depth=1 https://github.com/Farcaster-On-Chain-Verification/landing.git my-project-name
cd my-project-name
```

Install the necessary dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server with live reload, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Environment Variables

You can configure your environment variables in a `.env` file:

```bash
cp .env.example .env
```

Make sure to set up the required variables in your `.env` file.

## Deployment

### Build for Production

To create an optimized production build, run:

```bash
npm run build
npm run start
```

### Deploy with Vercel

If you haven't installed the `vercel` CLI yet, install it first:

```bash
npm install -g vercel
```

Deploy the project using Vercel:

```bash
vercel deploy
```

Set up your environment variables on Vercel either via the command line or the Vercel dashboard.

## License

Licensed under the MIT License, © 2024

See [LICENSE](LICENSE) for more information.
