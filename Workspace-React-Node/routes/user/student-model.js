const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
      },
      class1:{
        type: Number,
      },
      science:{
        type: Number,
      },
      maths:{
        type: Number,
      },
      english:{
        type: Number,
      },
    
},{
    timestamps: true,
});
module.exports= mongoose.model('studentdatas',StudentSchema);