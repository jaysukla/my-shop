const express = require('express');
const {connection ,Limited,New , Skin, Fashion , Fregrence ,User} = require('./schema/schema')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {watchman} = require('./middlewere/watchman')
const app = express()
app.use(express.json())




app.get("/", async(req,res)=>{

    
    res.send({"msg":"API IS WORKING "})
    })

// Resitration start here 

app.post("/regis",(req,res)=>{
let data=req.body ;
bcrypt.hash(data.password, 5, function(err, hash) {
    // Store hash in your password DB.
    User.insertMany({name:data.name,email:data.email,password:hash})
    // console.log(hash)
});
// console.log(data)




res.send({"msg":"Registration successfull"})
})




// login strats here 
app.post("/login", async (req,res)=>{
let data = req.body;
let d=await User.find({email:data.email});
let hash= d[0].password;
bcrypt.compare(data.password, hash, function(err, result) {
if(err){
    res.send({"msg":"err","err":err})
} else{
    var token = jwt.sign({myshop:'MYSHOP'}, 'hehe');
    res.send({"msg":"login success","taken":token})
}  


});
// console.log(data,d)

})


// all routes here 

const {Limitedrouter} = require('./routes/limited.route');
const {Skinrouter} = require('./routes/skin.route');
const {fregrencerouter} = require('./routes/fregrence.route');
const {fashionrouter} = require('./routes/fashion.route');
const {Newrouter} = require('./routes/new.route');

// send to routes here 

app.use('/limited',Limitedrouter);
app.use("/skin",Skinrouter);
app.use('/fregrence',fregrencerouter);
app.use('/fashion',fashionrouter);
app.use('/new',Newrouter);





app.listen("8080",()=>{


    try {
        connection;
        console.log("db connection successfull")
    } catch (error) {
        console.log("err from db connection ", error)
    }


    console.log("listning to port 8080")
})