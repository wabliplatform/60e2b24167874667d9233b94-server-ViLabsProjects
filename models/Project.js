
const { ProjectPImageSchema } =require('./ProjectPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


pImage:  
ProjectPImageSchema
 , 


pTitle:String , 


pStart:String , 


pWebsite:String , 


pEnd:String , 


pDuration:String , 


pGA:String , 


pAbstract:String , 


pDescription:String , 




 pWorkpackage: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

]



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

