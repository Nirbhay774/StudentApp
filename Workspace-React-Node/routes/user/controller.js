const modal = require('./student-model')

const getStudent = [
    (req,res)=>{
      modal.find().lean(true).then((result)=>{
        res.json({response:true,result:result});
     }).catch(err=>res.status(500).json(err));;
   }
  ]
  
  const getStudentById = [
    (req,res)=>{
      modal.findById({_id: req.params.id}).lean(true).then((result)=>{
        res.json({response:true,result:result});
     }).catch(err=>res.status(500).json(err));;
   }
  ]
  
  const addStudent = [
    (req,res)=>{
      console.log(req.body);
            modal.create(req.body).then((result)=>{
              res.json({response:true,result:result});
            }).catch(err=>res.status(500).json(err));
        }
      
   
  ]
  
  const updateStudent = [
    (req,res)=>{
      modal.findByIdAndUpdate({_id:req.params.id},req.body).then((result)=>{
        modal.findById(req.params.id).then((resDate)=>{
        res.json({response:true,result:resDate});
        })
      }).catch(err=>res.status(500).json(err));
   }
  ]
  
  const deleteStudent = [
    (req,res)=>{
      modal.findByIdAndDelete({_id:req.params.id},req.body).then((result)=>{
        res.json({response:true,result:result});
      }).catch(err=>res.status(500).json(err));
   }
  ]
  
  
  module.exports= {
    getStudent,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
  };