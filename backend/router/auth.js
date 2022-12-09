const express = require('express');
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const router = express.Router();
require('../db/connection');
const User = require('../model/schema');
const IGuser = require ('../model/schema')
const authenticate = require('../middleware/authenticate');
const instaData = require('../model/instaschema');

router.get('/', (req,res)=>{

    res.send('hello world from router');
   
})




router.post('/register', async(req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:'please fill in the form correctly'});

    }
try{
    const userExist = await User.findOne({email:email});
    if(userExist){ 
     return res.status(422).json({error: "User already exists"})
    }else if (password != cpassword){
        return res.status(422).json({error: "password does not match"})
    }else{
        const user = new User ({name, email, phone, work, password, cpassword})
            
    await user.save()
   
        res.status(201).json({message: 'user registered successfully'})}
            
           
        

    
}
catch (err){
    console.log("error")
}
    })

   
    router.post('/savedata', async(req,res)=>{
        const {imgURL, caption} = req.body;
       
    try{
        
            const instadata = new instaData ({imgURL, caption})
                
        await instadata.save()
       
            res.status(201).json({message: 'user registered successfully'})
            
               
            
    
        
    }
    catch (err){
        console.log("error")
    }
        })

        

    router.post('/signin', async(req, res)=>{

        const {email , password} = req.body;

        try{

        if(!email || !password){
            res.status(400).json({message:"please fill in correctly"})
        }

        const userLogin = await User.findOne({email:email})
        let token
        if(userLogin){
            const isMatch = await bcryptjs.compare(password, userLogin.password)
          token =  await userLogin.generateAuthToken();
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 258900000),
            httpOnly:true
          })
            if(!isMatch){
                res.status(400).json({message:"invalid"})
            }else{
                res.json({message:"logged in successfully"})
            }
        }else{
        res.status(400).json({message:"User does not exists"})
    }
}
catch(err){
    console.log(err)
}
    })



router.get('/displaydata' , authenticate, (req, res) =>{

    res.send(req.rootUser)
})




module.exports = router;




