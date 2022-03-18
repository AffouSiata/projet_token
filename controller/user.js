let { jwt } = require("jsonwebtoken")
const express = require("express");
const  connect  = require('../database/connexion');
 const router =  express.Router();






exports.test=(req,res)=>{
    res.status(200).json({message: "vous etes bien authentifié avec l' id :" .req.token.userId})
}
