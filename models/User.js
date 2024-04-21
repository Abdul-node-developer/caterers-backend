const mongoose = require('mongoose')

const user_schema = new mongoose.Schema(
  {
    user_name:{ type:String, required:true},
    password:{ type:String, required:true},
    created:{type:Date, required:false},
    phone:{type:Number, required:false},
    email:{ type:String, required:false},
    location:{ type:String, required:false }
  }
);

const User = mongoose.model("User", user_schema)

async function createUser(body){

  console.log("BODY", body);
  const user = await User.create(body);
  return user;

}

async function findUser(name, password, email){

  const user = await User.findOne({ user_name:name, password:password, email:email});
  return user;

}


module.exports = {
  model:User,
  createUser,
  findUser 
};