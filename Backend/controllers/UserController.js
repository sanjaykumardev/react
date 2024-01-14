const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//  const secretKey = 'sanjay007';




// register client 
const registeruser = async(req,res)=>{
  const {username , gmail, password}  = req.body;
  if(!(username&& gmail && password)){
    res.status(400).json("All are important");
    console.log(res);
  }
  // if user not a new user
  const userAvaliable = await User.findOne({gmail});
  if(userAvaliable){
    res.send(401).json("users is already there");;
    console.log(res);
   
  }

  // hashing the password 
  const hashingpassword = await bcrypt.hash(password,10);
  console.log("the password is hashed ",hashingpassword);
  const user = await User.create({
    username,
    gmail,
    password : hashingpassword
  });
  // save in DB 
  const  save = await user.save();
  console.log(`user is created ${save}`);


 
  // senting the msg to the user tha they are registered it
  if(!user){
    res.status(201).json({ gmail: User.gmail})
  }
  else{
    res.status(400)
    console.log(res)
  }
  console.log(user);
}


// login client 

const  loginuser = async(req,res)=>{
  const {gmail, password} = req.body;
  if(!gmail || !password){
    res.json(400);
    // console.log("all  the field are important");
    res.status(401).json({ error: 'Invalid credentials' });
  }
  const user = await User.findOne({gmail});
  // comparenthe password to hashpassword

  if(user && (await bcrypt.compare(password, user.password))){
// token
  // const accessToken = jwt.sign(
  //   {
  //     user: {
  //       username: user.username,
  //       email: user.gmail,
  //       id: user.id,
  //     },
  //   },
  //   process.env.ACCESS_TOKEN_SECERT,
  //   { expiresIn: "1h" }
  // );
//  res.status(200).json({ accessToken });

  } else{
    res.status(401);
    throw new Error("email or password is not valid");
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