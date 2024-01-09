const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken")

// register client 

const registeruser = async(req,res)=>{
  const {firstname, lastname , gmail, password}  = req.body;
  if(!firstname || !lastname || !gmail || !password){
    res.status(400);
    console.log(res);
  }
  // if user not a new user
  const userAvaliable = await User.findOne({gmail});
  if(userAvaliable){
    res.status(400);
    console.log(res,"email is already there");
  }

  // hashing the password 
  const hashingpassword = await bcrypt.hash(password,10);
  console.log("the password is hashed ",hashingpassword);
  const user = await User.create({
    firstname,
    lastname ,
    gmail,
    password : hashingpassword
  });
  console.log(`user is created ${user}`);
  // senting the msg to the user tha they are registered it
  if(!user){
    res.status(201).json({id: User.id , gmail: User.gmail})
  }
  else{
    res.status(400)
    console.log(res)
  }
  res.json(user);
}


// login client 

const  loginuser = async(req,res)=>{
  const {gmail, password} = req.body;
  if(!gmail || !password){
    res.status(400);
    console.log("all  the field are important");
  }
  const user = await User.findOne({gmail});
  // comparenthe password to hashpassword
  if(user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({ // jwt token 
      user:{
        firstname: User.firstname,
        lastname: User.lastname,
        gmail:User.gmail,
        id: User.id,
      },
    },
    // this to token to user to have when they login expiresIn:"1m" // 
    process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1m"}
    ); 
    res.status(200).json({accessToken});
  } else{
    res.status(401);
    console.log("email and password is not valid ")
  }
  res.json({message:"register the user"});
  };

  //privite client
  const privateUser =  async(req,res) =>{   
    res.json({message:"register the user"});
  };
  
 

module.exports = {registeruser ,loginuser ,privateUser}