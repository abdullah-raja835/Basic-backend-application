
let mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/REGISTRATION-FORM',{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>{
    console.log("Complete Registration Form")
})
.catch((err)=>{
    console.log(err)

})