const express = require("express");
const index = express()
const dotenv = require("dotenv")
dotenv.config()


index.get("/",(req,res)=>{
    res.send("Hello World")
})

index.get("/port",(req,res)=>{
    res.send(`port:${process.env.PORT || 4000}`)
})


index.listen(4000,()=>{
    console.log("Server is Running");
    
})