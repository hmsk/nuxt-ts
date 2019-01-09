const fs = require('fs')
const path = require('path')

let ForkTsCheckerWebpackPlugin

try {
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
} catch (err) {
}

module.exports = async function module (moduleOptions) {
  const presetTsconfig = path.join(__dirname, '../tsconfig.nuxt-ts.json')
  const tsconfigInNuxtRoot = fs.existsSync(path.resolve(process.cwd(), 'tsconfig.json'))
  const defaultOptions = {
    forkTsChecker: !!ForkTsCheckerWebpackPlugin && {
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
      memoryLimit: 2048
    },
    tsconfig: tsconfigInNuxtRoot ? path.resolve(process.cwd(), 'tsconfig.json') : presetTsconfig
  }

  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  // ts-loader in vue-loader loads tsconfig on premise that tsconfig is placed at project's root apparently
  // So, providing another tsconfig file which resolves path relatively from project's root
  const tsconfigForLoader = options.tsconfig === presetTsconfig ? path.join(__dirname, '../tsconfig.nuxt-ts-as-root.json') : options.tsconfig

  this.nuxt.options.extensions.push('ts')

  this.extendBuild((config, { isClient, isServer }) => {
    config.module.rules.push({
      loader: 'ts-loader',
      test: /(\.tsx?)$/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        configFile: tsconfigForLoader,
        transpileOnly: !!options.forkTsChecker
      }
    })

    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts')
    }

    if (isClient && options.forkTsChecker && !config.plugins.some((plugin) => plugin.constructor.name === 'ForkTsCheckerWebpackPlugin')) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          vue: true,
          tsconfig: options.tsconfig,
          workers: options.forkTsChecker.workers,
          memoryLimit: options.forkTsChecker.memoryLimit
        })
      )
    }
  })
}

module.exports.meta = require('../package.json')
