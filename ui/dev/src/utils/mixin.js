import logo from "assets/rasello.png";
import background from "assets/login-bg.png";
import qr from "assets/qrcode.png";

import { emailRule, emptyRule, passwordRule,ageRule, contactRule } from "src/utils/rules";


const genderOptions=["Male", "Female", "Others"];
const countryOptions= ["Nepal", "India", "China", "Bhutan", "Pakistan"];

export const assetsMixin = {
  data(){
    return{
      logo, background, qr
    }
  }
}

export const loginMixin = {
  data(){
    return{
      emailRule, emptyRule, passwordRule
    }
  }
}

export const registrationMixin = {
  data(){
    return{
      emailRule,
      emptyRule,
      passwordRule,
      ageRule,
      contactRule,

      genderOptions,countryOptions
    }
  }
}
