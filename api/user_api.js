const User = require('../models/User.js')


module.exports = {
  createUser,
  findUser
}


async function createUser(req, res){

  
  const { user_name } = req.body;
  console.log("Req body", user_name);
  const user = await User.createUser(req.body)
  res.json(user)
}

async function findUser(req, res){


  console.log("REQ", req.body);
  
  const { user_name, password, email } = req.body;
  const user = await User.findUser(user_name, password, email);

  if(user){
    res.json({ success:true, user})
  }
  else{
    res.json({ success:false})
  }
}

