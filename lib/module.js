module.exports = async function module (moduleOptions) {
  this.nuxt.options.extensions.push('ts')
  this.extendBuild(config => {
    config.module.rules.push({
      loader: 'ts-loader',
      test: /(\.tsx?)$/,
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    })
    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts')
    }
  })
}
