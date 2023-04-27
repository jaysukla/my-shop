var jwt = require('jsonwebtoken');
const watchman =(req,res,next)=>{
    const token = req.headers.authorization

    jwt.verify(token, 'hehe', function(err, decoded) {
       
if(err){
    res.send({"msg":"Login please"})
}else{
    
    next()
}

      });
}


module.exports={watchman}