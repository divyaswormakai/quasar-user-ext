/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    {
      name: 'name',
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return[
    {
      name:'user-extension',
      type:'confirm',
      message: "Use user-extension?",
      default:true
    },
    // {
    //   name: 'user details',
    //   type: 'checkbox',
    //   message: 'Check the fields you\'ll need for the user details',
    //   choices: [
    //     {
    //       name: 'First Name',
    //       value: 'fname'
    //     },
    //     {
    //       name: 'Last Name',
    //       value: 'lname'
    //     },
    //     {
    //       name: 'Age',
    //       value: 'age'
    //     },
    //     {
    //       name: 'Gender',
    //       value: 'gender'
    //     },
    //     {
    //       name: 'Country',
    //       value: 'country'
    //     },
    //     {
          
    //         name: 'Contact',
    //         value: 'contact'
          
    //     }
    //   ]
    // }
  ]
}
