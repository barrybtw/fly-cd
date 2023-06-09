<h1 align="center" id="title">express-fly-cd</h1>

<p align="center"><img src="https://socialify.git.ci/barrybtw/fly-cd/image?language=1&amp;owner=1&amp;name=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">Sample Express application setup for continuous deployment with Fly.io.</p>

<p align="center"><img src="https://img.shields.io/github/stars/barrybtw/fly-cd?style=social" alt="shields"></p>

<h2>🧐 Features</h2>

Here're some of the project's best features:

- Continuous Development (CD) with GitHub actions
- TypeScript
- Environment variable validation

<h2>🛠️ Installation Steps:</h2>

<p>1. Install dependencies</p>

```
{npm/yarn/pnpm} install
```

<p>2. Environment variables</p>

```diff
+ PGHOST=""
+ PGDATABASE=""
+ PGUSER=""
+ PGPASSWORD=""
+ ENDPOINT_ID=""
```

<p>3. Run the server</p>

```
{npm/yarn/pnpm} run dev
```

<h2>💻 Built with</h2>

Technologies used in the project:

- Typescript
- Express.js
- Zod
- @t3-oss/env
- postgres
- tsup
