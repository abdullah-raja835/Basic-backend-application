
let mongoose = require('mongoose');


// let validation=require('validator')

let mod=mongoose.Schema({

  FullName:String,
  Username:String,
  Email:{
    type:String,
    unique:true,
  },
  Phone:{
    type:Number,
    sparse:true,
    unique:true,
  },
  password:String,
  cpassword:String,


  // For those who are getting "no connection error".  please remove all there bolean parameters which are set as true, 
  // because in latest versin of mongodb ther is no need up setting up these parameters as true manually, they are already
  //  set as true.



})



let style=new mongoose.model('Register',mod)


module.exports=style;