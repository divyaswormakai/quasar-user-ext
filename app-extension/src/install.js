/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const { version } = require("ui/build/config")

module.exports = function (api) {
  //
	// api.compatibleWith('extensionname',version)
	// if (api.hasPackage('vuelidate')) {
		// hey, this app has it (any version of it)
	//  }

	api.compatibleWith('quasar', '^1.0.0')
	api.compatibleWith('@quasar/app', '^1.0.0')

	if(api.prompts.serviceA){
		api.render('./tempaltes/serviceA')
	}

	if(api.prompts.serviceB){
		api.render('./templates/serviceB', {
			productName: api.prompts.productName
		  })
	}

	api.render('./templates/common-files')
}
