const express = require("express");
const app =express();
const db = require('./database/connexion');
const index  = require('./route/utilisateur');


db.connect((error)=>{
    if(error){
        console.log("echec de connexion",error);
        
    }
    else{
        console.log("connexion reussi");

        
        app.set('views','./views');
        app.set('view engine','ejs')

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }))
        app.use('/public',express.static('public')); 


        app.use('/', index);
    
    }
});




app.listen(3000,()=>console.log(`listening  on port 3000`));