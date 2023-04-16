const express = require('express');
var cors = require('cors')
const {Skin} = require('../schema/schema')
var jwt = require('jsonwebtoken');
const {watchman} = require('../middlewere/watchman')
const app = express()
app.use(express.json())
app.use(cors())

const  Skinrouter = express.Router()


Skinrouter.get("/", async(req,res)=>{
    
    let data= await Skin.find()
    res.send({"data":data})

})



Skinrouter.post("/",watchman, async(req,res)=>{
    let data=req.body;
    console.log(data)
    Skin.insertMany([data])
  
    res.send({"msg":"product added successfully"})
    
    })
    
    
    Skinrouter.put("/", watchman, async(req,res)=>{
    let id=req.query.id;
    let data=req.body;
    console.log(id)
    let d= await Skin.findByIdAndUpdate({_id:id},data)
    
    res.send({"msg":"updated","updated":d})
    
    
    })
    
    
  
    
    Skinrouter.delete("/", watchman, async(req,res)=>{
        let id=req.query.id;
     let data= await Skin.findByIdAndDelete(id)
    console.log(id)
    
    res.send({"msg":"deleted","data":data})
    
    })
    


    module.exports={Skinrouter}
    