
const express = require("express");
const  connect  = require('../database/connexion');
const router = express.Router();
var  jwt  = require ( 'jsonwebtoken' ) ; 
const { verifi } = require("../milldeware/verifie");




 router.get('/',(req,res)=>{
     res.render('conn')
 }) 




router.post("/",(req,res)=>{
    if(req.body.email == "affousiatao59@gmail.com" && req.body.password == "azerty") {
        let token = jwt.sign({email : req.body.email},"anNvbnRva2Vu");  
        console.log(token);
        res.redirect('/')   
   }
   else{
       res.status(401 ).json({message: "login ou password incorrect "})
   }
})

module.exports = router;