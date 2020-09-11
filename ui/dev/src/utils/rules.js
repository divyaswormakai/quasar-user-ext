var contactNumber = /^[0-9]+$/;

export const emptyRule=  val => val && val.length > 0 || 'This can\'t be empty';
export const emailRule = val => val.includes('@') && val.includes('.') || 'This is not a valid email';
export const passwordRule = val => val && val.length>=8 || 'Password shouldn\'t be less than 8 characaters';
export const ageRule = val => val && parseInt(val)>18 || 'You must be above 18.';
export const contactRule = val=>val && val.match(contactNumber) || 'Must be numbers only';
