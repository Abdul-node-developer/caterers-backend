const mongoose = require('mongoose');
const User = require('./models/User.js')


const express = require("express")
const app = express();
const port = process.env.PORT || 5005
const DATABASE_URL = "mongodb+srv://abdulsieora:0sjjisQY9J4ketN1@backend.hupih9r.mongodb.net/Catering-app?retryWrites=true&w=majority&appName=Backend"
const USER_API = require('./api/user_api.js');
const { json } = require('express');

//Data base connection method
mongoose.connect(DATABASE_URL)
.then( ()=>{ console.log("Connected to DB"); } )
.catch( (err)=>{ console.log(err); } )

const cors = require('cors');
app.use(cors());


app.use(express.json());

app.post('/', (req, res)=>{
  res.json(req.body)
})

app.post('/find_user', USER_API.findUser)
app.post('/create_user', USER_API.createUser)




app.listen(port, ()=>{
  console.log("Server started at "+port);
})



