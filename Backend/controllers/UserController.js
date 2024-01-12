const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

 const secretKey = 'sanjay007';




// register client 
const registeruser = async(req,res)=>{
  const {firstname, lastname , gmail, password}  = req.body;
  if(!(firstname && lastname && gmail && password)){
    res.status(400).json("All are important");
    console.log(res);
  }
  // if user not a new user
  const userAvaliable = await User.findOne({gmail});
  if(userAvaliable){
    res.status(401).json("users is already there");;
    console.log(res,"users is already there");
   
  }

  // hashing the password 
  const hashingpassword = await bcrypt.hash(password,10);
  console.log("the password is hashed ",hashingpassword);
  const newuser = await User.create({
    firstname,
    lastname ,
    gmail,
    password : hashingpassword
  });
  // save in DB 
  await newuser.save();
  console.log(`user is created ${newuser}`);

  // generate  the token 
  const token =  jwt.sign({
    gmail, id: newuser._id,}, secretKey, 
    {
       expiresIn: '2h' 
    });
    newuser.token = token
    newuser.password = undefined
    res.status(200).json(newuser)
  // senting the msg to the user tha they are registered it
  if(!newuser){
    res.status(201).json({ gmail: User.gmail})
  }
  else{
    res.status(400)
    console.log(res)
  }
  res.json(newuser);
}


// login client 

const  loginuser = async(req,res)=>{
  const {gmail, password} = req.body;
  if(!gmail || !password){
    res.json(400);
    console.log("all  the field are important");
    // return res.status(401).json({ error: 'Invalid credentials' });
  }
  const user = await User.findOne({gmail});
  // comparenthe password to hashpassword

  if(user && (await bcrypt.compare(password, user.password))){
  // const Token = ;// this to token to user to have when they login expiresIn:"1m" //   
    res.status(200).json({Token});

  } else{
    console.log("email and password is not valid ",err);
    res.status(500).json({ error: 'Internal server error' });
  }

  res.json({message:"register the user"});
  };

  // logout
   const logoutuser =   async (req, res) => {
    try {
      res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("logout successfully")
    }
    catch (err) {
      res.status(500).json(err)
    }
  } 
  


 

module.exports = {registeruser ,loginuser ,logoutuser}