const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
      },
      mobile:{
        type: Number,
      },
      email:{
        type: String,
    
        required: 'Email address is required'
      },
      password:{
        type: String,
        required: true
       
      },},
      {  timestamps: true,
});
module.exports= mongoose.model('registerData',LoginSchema);


