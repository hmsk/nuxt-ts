const fs = require('fs')
const path = require('path')

let ForkTsCheckerWebpackPlugin

try {
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
} catch (err) {
}

module.exports = async function module (moduleOptions) {
  const tsconfigInNuxtRoot = fs.existsSync(path.resolve(process.cwd(), 'tsconfig.json'))
  const defaultOptions = {
    forkTsChecker: !!ForkTsCheckerWebpackPlugin && {
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
      memoryLimit: 2048
    },
    tsconfig: tsconfigInNuxtRoot ? path.resolve(process.cwd(), 'tsconfig.json') : path.join(__dirname, '../tsconfig.nuxt-ts.json')
  }

  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  this.nuxt.options.extensions.push('ts')

  this.extendBuild((config, { isClient, isServer }) => {
    config.module.rules.push({
      loader: 'ts-loader',
      test: /(\.tsx?)$/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        configFile: options.tsconfig,
        transpileOnly: !!options.forkTsChecker
      }
    })

    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts')
    }

    if (options.forkTsChecker && isClient) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          vue: true,
          tsconfig: options.tsconfig
        })
      )
    }
  })
}

module.exports.meta = require('../package.json')
