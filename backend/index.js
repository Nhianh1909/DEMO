const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());


//Database Connection With Mongo
mongoose.connect("mongodb+srv://2251120267:cdMa6kPTmQ6uiIn9@cluster0.yjnnmki.mongodb.net/e-commerce");

//API CREACTION 
app.get("/", (req, res)=>{
    res.send("Express App is Running")
})

app.listen(port, (error)=>{
    if(!error){
        console.log("Server Running on Port " +port)
    }
    else{
         console.log("Error : "+error)
    }
})