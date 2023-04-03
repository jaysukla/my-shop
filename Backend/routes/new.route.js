const express = require('express');
const {New} = require('../schema/schema')
var jwt = require('jsonwebtoken');
const {watchman} = require('../middlewere/watchman')
const app = express()
app.use(express.json())


const Newrouter = express.Router()


Newrouter.get("/", async(req,res)=>{
    
    let data= await New.find()
    res.send({"data":data})

})



Newrouter.post("/",watchman, async(req,res)=>{
    let data=req.body;
    
    New.insertMany([data])
    
    res.send({"msg":"product added successfully"})
    
    })
    
    
    Newrouter.put("/", watchman, async(req,res)=>{
    let id=req.query.id;
    let data=req.body;
    
    let d= await New.findByIdAndUpdate({_id:id},data)
    
    res.send({"msg":"updated","updated":d})
    
    
    })
    
    
  
    
    Newrouter.delete("/", watchman, async(req,res)=>{
        let id=req.query.id;
     let data= await New.findByIdAndDelete(id)
    console.log(id)
    
    res.send({"msg":"deleted","data":data})
    
    })
    


    module.exports={Newrouter}
    