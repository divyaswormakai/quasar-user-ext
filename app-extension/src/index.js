/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-user-ext/src/boot/register.js')

  // make sure app extension files & ui package gets transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-user-ext[\\/]src/)

  // make sure the stylesheet goes through webpack to avoid SSR issues
  conf.css.push('~quasar-ui-user-ext/src/index.sass')
}

function onPublish (api, { arg, distDir }) {
  // this hook is called when "quasar build --publish" is called

  // your publish logic here...
  console.log('We should publish now. But maybe later? :)')

  // are we trying to publish a Cordova app?
  if (api.ctx.modeName === 'cordova') {
    // do something
  }
}

function chainWebpack (cfg, { isClient, isServer }, api) {
  // cfg is a Webpack chain Object;
  // docs on how to use it: webpack-chain docs (https://github.com/neutrinojs/webpack-chain)
}

module.exports = function (api) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.1.1')
  api.compatibleWith('@quasar/app', '^1.1.0 || ^2.0.0')

  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('MyComponent', '~quasar-ui-user-ext/src/components/MyComponent.json')

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)

  if(api.prompts.publishService){
    api.onPublish(onPublish)
  }

  api.chainWebpack(chainWebpack)
}
