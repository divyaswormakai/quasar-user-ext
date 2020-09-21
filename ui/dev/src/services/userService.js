import axios from 'axios';
import {baseUrl} from 'src/utils/constant'
// Refine the base url
axios.defaults.baseURL= baseUrl;

const getAllUsers = async()=>{
  try{
    let users =await axios.get('/users');
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
    const res = await axios.post('/api/login',body,{'Content-Type':'multipart/form-data', 'Access-Control-Allow-Origin':'*'});
    if(res){
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
      let savedUser = await axios.post('/users',userDetails);
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
    let res = await axios.get(`/api/me`,{headers:{'Authorization': tokenType+' '+accessToken, [tokenType]:accessToken}});
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
    let res = await axios.post('/api/refresh',body);
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
    let res = await axios.post('/api/logout',{},{headers:{ 'Content-Type':'multipart/form-data', 'Accept':'application/json','Authorization': 'Bearer '+accessToken}});
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
