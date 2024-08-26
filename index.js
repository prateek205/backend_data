const express = require("express");
const index = express()
const dotenv = require("dotenv")
dotenv.config()


index.get("/db.json",(req,res)=>{
    res.send("db.json")
})

index.get("/port",(req,res)=>{
    res.send(`port:${process.env.PORT || 4000}`)
})


index.listen(3000,()=>{
    console.log("Server is Running");
    
})