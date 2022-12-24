let express=require("express");
let app=express();
let path=require('path');
let port=process.env.PORT||8000;
require('./db/conn')  
let style=require('./models/schema')    
let hbs=require('hbs')

// let tplink=require('../src/router/router')
// app.use(tplink)

    
let assets=path.join(__dirname,"../mernbackend")   //let staticpath=path.join(__dirname,"../mernbackend/templates/views/index")
let viewspath=path.join(__dirname,"../mernbackend/templates/views")      // let templatepath=path.join(__dirname,"../mernbackend/templates/views") 
let partialpath=path.join(__dirname,"../mernbackend/templates/partials")    //let partialpath=path.join(__dirname,"../mernbackend/templates/partials")


app.set("view engine","hbs") 
app.use(express.static(assets))
app.set('views',viewspath);      
hbs.registerPartials(partialpath);  
app.use(express.json());
app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{

    res.render('index');    
})


app.get('/register',(req,res)=>{
    res.render('register')
})

//we need post coz we need data from user
app.post('/register',async(req,res)=>{
    try{
        // for confirmation of password....agr ye password thk dalty hn data store kr do else error throw kro
       let password=req.body.Password;
       let cpassword=req.body.ConfirmPassword;  //req.body ka agy form k liye ditto whi value likhni ha jo form k name ha 
                                                 //ku form k input ma jo name ha wo backend k liye use hta ha 
         


    //so here the only problem is dont give same values in registration form otherwise the code will not run

       if(password===cpassword){
            let putit= style({            
                FullName:req.body.FullName,      // req.body k agy wo value deni ha jo form k input tag k andar name ma ha 
                Username:req.body.Username,
                Email:req.body.Email,
                PhoneNumber:req.body.PhoneNumber,
                Password:req.body.Password,
                ConfirmPassword:req.body.ConfirmPassword,
            })
            let access=await putit.save()
            res.status(201).render('login')
            // console.log(access)

       }
       else{
        res.send("THE PASSWORD IS NOT MATCHING ")
       }
         console.log(req.body)
        //  res.send()
    }
    catch(err){
        res.status(400).send(err)

    }
})


// app.get('/login',(req,res)=>{
//     res.render('login')
// })

app.listen(port,()=>{
    console.log('connection successful');      
});