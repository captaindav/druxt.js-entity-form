# Druxt router

[![CircleCI](https://circleci.com/gh/Realityloop/druxt-router.svg?style=svg)](https://circleci.com/gh/Realityloop/druxt-router)
[![Known Vulnerabilities](https://snyk.io//test/github/Realityloop/druxt-router/badge.svg?targetFile=package.json)](https://snyk.io//test/github/Realityloop/druxt-router?targetFile=package.json)
[![codecov](https://codecov.io/gh/Realityloop/druxt-router/branch/develop/graph/badge.svg)](https://codecov.io/gh/Realityloop/druxt-router)

Druxt (DRUpal nuXT) is a Nuxt module that provides an easy connection between a Nuxt frontend and Drupal backend.

## Install

`$ npm install druxt-router`

## Usage

Add module to `nuxt.config.js`

```js
module.exports = {
  modules: [
    ...
    ['druxt-router/nuxt', {
      baseUrl: 'https://example.com',
    }]
  ]
}
```

Ensure you have activated the [Nuxt Vuex store](https://nuxtjs.org/guide/vuex-store/).

## Options

| Option | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `axios` | `object` | No | `{}` | [Axios instance settings](https://github.com/axios/axios#axioscreateconfig). |
| `baseUrl` | `string` | Yes | `null` | Base URL for the Drupal installation. |
| `JSONAPIDeserializer` | `boolean` | No | `false` | Enable/Disable [JSON API Serializer](https://www.npmjs.com/package/jsonapi-serializer) parsing of Drupal entities. |

