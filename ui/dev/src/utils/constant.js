import { ageRule, contactRule, emptyRule, genderRule } from "./rules";
// Import from validate directly..

export const registrationOptions=[
  {label:"First Name", hint:"John", rules:[emptyRule], class:"form-row-elem-2", model:'fname', type:'text'},
  {label:"Second Name", hint:"Name", rules:[emptyRule], class:"form-row-elem-2", model:'lname', type:'text'},
//   {label:"Age", hint:"18", rules:[emptyRule,ageRule], class:"form-row-elem-3", model:'age', type:'number'},
//   {label:"Gender", hint:"Male/Female/Others", rules:[emptyRule,genderRule], class:"form-row-elem-3", model:'gender', options:'genderOptions',type:'dropdown'},
//   {label:"Country", hint:"Nepal", rules:[emptyRule], class:"form-row-elem-3", model:'country', options:'countryOptions',type:'dropdown'},
//   {label:"Contact", hint:"+98xxxxxxxx", rules:[emptyRule,contactRule], class:"form-row-elem-2", model:'contact', type:'text'},
 ]

 export const loginTitle= "Welcome to Rasxp"

 export const baseUrl = "http://localhost:3000"

