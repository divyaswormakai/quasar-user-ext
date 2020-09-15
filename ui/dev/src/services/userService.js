import axios from 'axios';
// Refine the base url
axios.defaults.baseURL="http://localhost:3000/users"

const getAllUsers = async()=>{
  try{
    let users =await axios.get();
    return users.data;
  }
  catch(err){
    console.log("Error");
    return ({error:'Cannot get all users data'})
  }
}
const userLogin = async(email,password)=>{
  try {
    console.log("Logging in user");
    const users = await getAllUsers();
    // console.log(users)
    let user = users.filter(user=>user.email==email);
    if(user.length>0){
      if(user[0].password === password){
        return user[0];
      }
      else{
        throw new Error('Password was incorrect');
      }
    }
    else{
      throw new Error('Account not found. Try registering first?');
    }
  } catch (err) {
    return({error:err.message});
  }
}

const userRegister = async (userDetails)=>{
  try {
    console.log("Register user");
    let users = await getAllUsers();
    let existingUser = users.filter(user=>user.email==userDetails.email);
    if(existingUser.length<=0) {
      userDetails.id = Math.ceil( Math.random()*10000000);
      let savedUser = await axios.post('/',userDetails);
      if(savedUser){
        console.log(savedUser);
        return savedUser.data;
      }
      else{
        throw new Error("Error registering new user")
      }
    }
    else{
      throw new Error("User already exists")
    }
  } catch (err) {
    return({error: err.message});
  }
}

const userProfile = async(id)=>{
  try {
    let user = await axios.get(`/${id}`);
    if(user){
      return user.data;
    }
    else{
      throw new Error("User doesn't exist")
    }
  } catch (err) {
    return({error:err.message});

  }
}
export default{userLogin,userRegister,userProfile};
