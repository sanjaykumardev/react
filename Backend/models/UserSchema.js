
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
 firstname :{
  type: String,
  required:true,
  unique:true
 },
 lastname:{
  type: String,
  required:true,
  unique:true
 },
 gmail:{
  type:String,
  required:true,
  unique:true
},
password:{
  type:String ,
  required:true,
  
}
},{
  timestampe:true,
});

module.exports = mongoose.model('user',UserSchema)