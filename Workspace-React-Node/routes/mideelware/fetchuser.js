const jwt = require("jsonwebtoken")
const JWT_SECRET = "khbasdkhbfkjandjfgnljanlf"  
const fetchUser =(req, res , next)=>{
 //get the  user from the jwt token and add the id to req oibject 
 const token = req.header('auth-token')
 
 if(!token){
    res.status(402).send("please authenticate valid token  ")
    
 }
 else{
 try {

const data = jwt.verify(token , JWT_SECRET);

  console.log("Data ---<>", data)

//  req.user = data.user;
 




next();


 }
 catch{
   res.status(402).send("please authenticate valid token  ")

 }
 
    
 }

}
module.exports = fetchUser;
