const express = require("express");
const index = express()
const dotenv = require("dotenv")
dotenv.config()


index.get("/",(req,res)=>{
    res.send("<h1>Hello World !!!</h1>")
})

index.get("/port",(req,res)=>{
    res.send(`port:${process.env.PORT || 3000}`)
})


index.listen(3000,()=>{
    console.log("Server is Running");
    
})