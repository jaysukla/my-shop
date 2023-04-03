const express = require('express');
const { Limited } = require('../schema/schema')
var jwt = require('jsonwebtoken');
const {watchman} = require('../middlewere/watchman')
const app = express()
app.use(express.json())


const  Limitedrouter = express.Router()


Limitedrouter.get("/", async(req,res)=>{
    
    let data= await Limited.find()
    res.send({"data":data})

})



Limitedrouter.post("/",watchman, async(req,res)=>{
    let data=req.body;
    
    Limited.insertMany([data])
   
    res.send({"msg":"product added successfully"})
    
    })
    
    
    Limitedrouter.put("/", watchman, async(req,res)=>{
    let id=req.query.id;
    let data=req.body;
    
    let d= await Limited.findByIdAndUpdate({_id:id},data)
    
    res.send({"msg":"updated","updated":d})
    
    
    })
    
    
  
    
    Limitedrouter.delete("/", watchman, async(req,res)=>{
        let id=req.query.id;
     let data= await Limited.findByIdAndDelete(id)
    console.log(id)
    
    res.send({"msg":"deleted","data":data})
    
    })
    


    module.exports={Limitedrouter}
    