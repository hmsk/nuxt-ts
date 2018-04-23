# nuxt-ts
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-ts/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-ts)
[![npm](https://img.shields.io/npm/dt/nuxt-ts.svg?style=flat-square)](https://npmjs.com/package/nuxt-ts)
[![CircleCI](https://img.shields.io/circleci/project/github/hmsk/nuxt-ts.svg?style=flat-square)](https://circleci.com/gh/hmsk/nuxt-ts)
[![Codecov](https://img.shields.io/codecov/c/github/hmsk/nuxt-ts.svg?style=flat-square)](https://codecov.io/gh/hmsk/nuxt-ts)
[![Dependencies](https://david-dm.org/hmsk/nuxt-ts/status.svg?style=flat-square)](https://david-dm.org/hmsk/nuxt-ts)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> TypeScript module for Nuxt 2

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Shared module for using TypeScript in Nuxt 2.

With just having this module, can use `<script lang="ts">`, TypeScript files for `store/`, `middleware/`.

## Setup to use TypeScript in Nuxt 2

- Install `nuxt-ts` to your project

```
$ npm i nuxt-ts
```

- Add `nuxt-ts` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-ts',
 ]
}
```

- Install `typescript`, `ts-loader` to your project

```
$ npm i typescript ts-loader
```

- Have your `tsconfig.json` as you like in project root

### Sample `tsconfig.json` for Nuxt 2

```json
{
  "compilerOptions": {
    "target": "es5",
      "lib": [
        "dom",
        "es2015"
      ],
      "module": "es2015",
      "moduleResolution": "node",
      "experimentalDecorators": true,
      "noImplicitAny": false,
      "noImplicitThis": false,
      "strictNullChecks": true,
      "removeComments": true,
      "suppressImplicitAnyIndexErrors": true,
      "allowSyntheticDefaultImports": true,
      "baseUrl": ".",
      "allowJs": true,
      "paths": {
        "~/*": ["./*"]
      }
  }
}

```

## ToDo

- Support tsx?
- CI with actual samples

## Development

- Clone this repository
- Install dependencies `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Kengo Hamasaki / hmsk <k.hamasaki@gmail.com>
