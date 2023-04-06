const mongoose = require('mongoose')

 const connection = mongoose.connect('mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/myshop?retryWrites=true&w=majority')

const User = mongoose.model("user",mongoose.Schema({
  name:String,
  email:String,
  password:String,
  type:String
}))


 const Limited=mongoose.model("limited",mongoose.Schema({
name:String,
Image:String,
price:Number,
discription:String,

 }))

 const New = mongoose.model("new",mongoose.Schema({
    name:String,
    Image:String,
    price:Number,
    discription:String,
    
  }))

  const Skin = mongoose.model("skin",mongoose.Schema({
    name:String,
    Image:String,
    price:Number,
    discription:String,
    
  }))


  const Fashion = mongoose.model("fashion",mongoose.Schema({
    name:String,
    Image:String,
    price:Number,
    discription:String,
    
  }))


  const Fregrence = mongoose.model("fregrence",mongoose.Schema({
    name:String,
    Image:String,
    price:Number,
    discription:String,
    
  }))


  




  module.exports ={connection ,Limited,New , Skin, Fashion , Fregrence ,User}