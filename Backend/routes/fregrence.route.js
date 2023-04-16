const express = require('express');
var cors = require('cors')
const {Fregrence} = require('../schema/schema')
var jwt = require('jsonwebtoken');
const {watchman} = require('../middlewere/watchman')
const app = express()
app.use(express.json())
app.use(cors())

const fregrencerouter = express.Router()


fregrencerouter.get("/", async(req,res)=>{
    
    let data= await Fregrence.find()
    res.send({"data":data})

})



fregrencerouter.post("/",watchman, async(req,res)=>{
    let data=req.body;
    
    Fregrence.insertMany([data])
    
    res.send({"msg":"product added successfully"})
    
    })
    
    
    fregrencerouter.put("/", watchman, async(req,res)=>{
    let id=req.query.id;
    let data=req.body;
    
    let d= await Fregrence.findByIdAndUpdate({_id:id},data)
    
    res.send({"msg":"updated","updated":d})
    
    
    })
    
    
  
    
    fregrencerouter.delete("/", watchman, async(req,res)=>{
        let id=req.query.id;
     let data= await Fregrence.findByIdAndDelete(id)
    console.log(id)
    
    res.send({"msg":"deleted","data":data})
    
    })
    


    module.exports={fregrencerouter}
    