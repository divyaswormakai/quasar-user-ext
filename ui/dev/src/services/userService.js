import httpClient from 'src/utils/axiosprops';

const getAllUsers = async()=>{
  try{
    let users =await httpClient.get('/users');
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
    let body ={
      username:email,password
    }
    const res = await httpClient.post('/api/login',body,{'Content-Type':'multipart/form-data'});
    if(res){
      res.successMessage="Logged successfully";
      return res.data;
    }
    else{
      throw new Error("Something went wrong.");
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
      let savedUser = await httpClient.post('/users',userDetails);
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

const userProfile = async(tokenType, accessToken)=>{
  try {
    let res = await httpClient.get(`/api/me`);
    // console.log(res);
    if(res){
      // console.log(res.data);
      return res.data.user;
    }
    else{
      throw new Error("User doesn't exist")
    }
  } catch (err) {
    return({error:err.message});
  }
}

const refreshUserToken = async(refreshToken)=>{
  try{
    let body = {refresh_token: refreshToken};
    // console.log(body)
    let res = await httpClient.post('/api/refresh',body);
    if(res){
      // console.log(res.data);
      return res.data;
    }
    else{
      throw new Error(res.error);
    }
  }
  catch(err){
    return ({error:err.message})
  }
}

const logOutUser = async(accessToken)=>{
  try{
    let res = await httpClient.post('/api/logout',{},{headers:{ 'Content-Type':'multipart/form-data', 'Accept':'application/json'}});
    if(res){
      return  res.data;
    }
    else{
      throw new Error("Logging out failed");
    }
  }
  catch(err){
    return ({error:err.message})
  }
}

export default{userLogin,userRegister,userProfile,refreshUserToken,logOutUser};
