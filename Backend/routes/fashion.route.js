const express = require('express');
const {Fashion} = require('../schema/schema')
var jwt = require('jsonwebtoken');
const {watchman} = require('../middlewere/watchman')
const app = express()
app.use(express.json())


const fashionrouter = express.Router()


fashionrouter.get("/", async(req,res)=>{
    
    let data= await Fashion.find()
    res.send({"data":data})

})



fashionrouter.post("/",watchman, async(req,res)=>{
    let data=req.body;
    
    New.insertMany([data])
    
    res.send({"msg":"product added successfully"})
    
    })
    
    
    fashionrouter.put("/", watchman, async(req,res)=>{
    let id=req.query.id;
    let data=req.body;
    
    let d= await Fashion.findByIdAndUpdate({_id:id},data)
    
    res.send({"msg":"updated","updated":d})
    
    
    })
    
    
  
    
    fashionrouter.delete("/", watchman, async(req,res)=>{
        let id=req.query.id;
     let data= await Fashion.findByIdAndDelete(id)
    console.log(id)
    
    res.send({"msg":"deleted","data":data})
    
    })
    


    module.exports={fashionrouter}
    