# Maersk Vite Template

This is the preset for all new VueJS projects within the Maersk.com Platform. It defines how a new project should be made and is formatted as-per the [Vite template guidelines](https://vitejs.dev/guide/#community-templates). This template comes with support for TypeScript 🎉

All details for this can be found on the [Maersk.com Coding Standards page](https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.wiki/tab::4b4879cb-101a-48e3-bf98-701fd7b10128?context=%7B%22subEntityId%22%3A%22%7B%5C%22pageId%5C%22%3A5%2C%5C%22origin%5C%22%3A2%7D%22%2C%22channelId%22%3A%2219%3A3855c7b117224ef593084c0c7dcf21f9%40thread.skype%22%7D&tenantId=05d75c05-fa1a-42e7-9cf1-eb416c396f2d)

## TypeScript support

TypeScript is supported in this template by default, however, it is not used in all files. You can choose to use it if you want to, or ignore it and carry on with regular JavaScript.

## Known Issues

- Hot Module Replacement is not working for child components [Vite#4182](https://github.com/vitejs/vite/issues/4182) and [Vite#4150](https://github.com/vitejs/vite/issues/4150)
  - **Note** Ensure that your dynamically imported content has _exactly_ the right name, it is case-sensitive

In previous versions there was an `index-seau.html` file that is designed for Sealand's CSS variables. However, there's no current way to preview this using the vite server. See [this discussion](https://github.com/vitejs/vite/discussions/5202) which should provide an answer at some point. The template has switched to using the dynamic import method used by the vue-cli projects.

## Usage

```sh
npx degit Maersk-Global/vite-maersk-template my-project
cd my-project

npm install
npm run dev
```

## VSCode setup

Integrating these tools with your editor can save you a lot of time by auto-formatting and highlighting issues for you. The project includes its own settings to make the code as streamlined as possible. If you use VSCode, you need three extensions:

- ESLint
- Volar

## The defaults

The preset gives you the following:

- Vue 3
- Pinia
- Vue Router
- ESLint
- Sass
- Vitest
- Cypress
- Browserslist
- The Maersk Design System
- Maersk-specific Vite Plugins

### Cypresss

Maersk has an enterprise license for Cypress and can be used by anyone in technology. Sign in to Cypress Dashboard with SSO to get started and create a project. There is a sample Github Action workflow in the project to help you get started with it.

## More Plugins

### Maersk-specific

Maersk have built the following plugins for Vite to help you. These are included by default

- [@maersk-global/vite-plugin-datadog](https://github.com/Maersk-Global/vite-plugins/packages/vite-plugin-datadog) - A plugin to add the Datadog Configuration
- [@maersk-global/vite-plugin-google-analytics](https://github.com/Maersk-Global/vite-plugins/packages/vite-plugin-google-analytics) - A plugin to add Google Analytics

### Recommended plugins

- [vite-plugin-mock-server](https://github.com/enjoycoding/vite-plugin-mock-server) - A decent mock API server

### Other plugins

Vite has a curated list of plugins over at [Awesome Vite](https://github.com/vitejs/awesome-vite#plugins).

## To Do

- Server-Side Rendering support in Vite, either with [vite-plugin-ssr](https://vite-plugin-ssr.com/) or [by hand](https://vitejs.dev/guide/ssr.html) or with [Nuxt 3](https://nuxtjs.org/v3) which uses Vite as its dev bundler.

#
# Deployment

## 1. Set the following secrets in github project
##### the SSH keys are generated locally, one for each environment
##### For the Akamai client info and tokens you need to contact "Akamai admin"

- AKAMAI_SSH_KEY_CDT - Private ssh key for CDT
- AKAMAI_SSH_KEY_PP - Private ssh key for Pre-Production
- AKAMAI_SSH_KEY_PROD - Private ssh key for Production
- REPO_ADMIN_TOKEN - Token used by pipeline for pushing to the main branch

## 2. Provide correct info to /pipelineConfig/uiConfig.yaml file