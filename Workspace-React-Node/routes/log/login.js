const modal = require('./registration-model')

const bcrypt = require('bcrypt')
JWT_SECRET = "khbasdkhbfkjandjfgnljanlf"

const jwt = require("jsonwebtoken")
const fetchUser = require('../mideelware/fetchuser')



const getSign = [

    async (req, res) => {
      const { email, password } = req.body;
      try {
  
        if (!email || !password) {
          return res.status(400).json({ error: "please fill the data " })
        }
        const userLogin = await modal.findOne({ email: email })
        // console.log("user==>", userLogin)/
  
        Token = jwt.sign(userLogin.id, JWT_SECRET)
  
        //match the password which i bcrypted with login 
        const isMatch = await bcrypt.compare(password, userLogin.password)
        if (userLogin) {
          if (!isMatch) {
            return res.json({ error: "invalids " })
          }
          else {
  console.log("suceesfull login")
            return res.json({ massage: "user signin successsfully", token: Token })}      }
    else {
          console.log("invalid")
          // res.json({error:"enter correct email"})
  } }catch (err) {
  console.log("invalid details  ")}}]

  module.exports = {
    getSign
  
  };