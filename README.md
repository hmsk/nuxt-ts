# nuxt-ts@legacy ⚠️ DEPRECATED

This repository is the source code for the legacy version of `nuxt-ts`.
The latest `nuxt-ts` is owned by Nuxt core team after v2.4.0.

[![](https://img.shields.io/npm/v/nuxt-ts/legacy.svg?style=for-the-badge)](https://www.npmjs.com/package/nuxt-ts)


Shared module for using TypeScript in Nuxt 2.
Enable your Nuxt project to use TypeScript easier and quicker 🍲

## Enable your Nuxt project to:

- Write `<script lang='ts'>`
  - 🔮 Then you can use `~` like `import OneComponent from "~/components/one-component.vue"`
- Use TypeScript `.ts` files

## Installation

- Install this module `nuxt-ts` to your Nuxt project

```sh
$ npm i nuxt-ts
```

- Install `typescript`, `ts-loader` too

```
$ npm i typescript ts-loader
```

- Add `nuxt-ts` to `modules` section on `nuxt.config.js`

```js
{
  modules: [
    'nuxt-ts',
 ]
}
```

with options

```js
{
  modules: [
    ['nuxt-ts', {
      forkTsChecker: { workers: 2, memoryLimit: 4096 },
      tsconfig: path.join(__dirname, 'tsconfig.custom.json')
    }]
  ]
}
```

### Run type check separately

This may make your main build of Nuxt faster. Install [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin). `nuxt-ts` uses automatically if that's installed.

```sh
$ npm i fork-ts-checker-webpack-plugin
```

### tsconfig

`nuxt-ts` provides default of tsconfig automatically. So you don't need to have `tsconfig.json` basically. In some cases, you may want to use your own, **have your `tsconfig.json` as you like in project root**. `nuxt-ts` picks that automatically as default. 

#### "No inputs were found"

If you see unintentioanl error like:

```
TS18003: No inputs were found in config file 'tsconfig.json'. Specified 'include' paths were '["node_modules/nuxt-ts/../../**/*.ts","node_modules/nuxt-ts/../../**/*.vue"]' and 'exclude' paths were '["node_modules/nuxt-ts/../../node_modules"]'.
```

Your project doesn't have any `*.ts` nor `*.vue` file. To avoid this, have both `*.ts` and `*.vue` one for each at least. 

#### VSCode

However, VSCode requires `tsconfig.json` on the root of your project [currently](https://github.com/Microsoft/vscode/issues/12463). If you prefer to use the config which `nuxt-ts` provides, just make `tsconfig.json` with:

```json
{
  "extends": "./node_modules/nuxt-ts/tsconfig.nuxt-ts.json"
}
```

## Options

- `tsconfig: string`
  - The path for the custom `tsconfig` file
- `forkTsChecker: { workers: number, memoryLimit: number }`
  - Settings for ForkTsCheckerPlugin

## Sample Project

This vue-cli template gives a simple ready-made Nuxt2 + TS3 by using `nuxt-ts`: https://github.com/hmsk/nuxt-typescript-template

## ToDo

- Support tsx?
- CI with actual samples

## Releases

[📖 Release Notes](./CHANGELOG.md)

## License

[MIT License](./LICENSE)

Copyright (c) Kengo Hamasaki / hmsk <k.hamasaki@gmail.com>
