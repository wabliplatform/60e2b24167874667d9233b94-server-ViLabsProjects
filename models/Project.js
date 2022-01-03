
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
Underscoreid:String , 

ProjectTitle:String , 

ProjectDuration:Number , 

ProjectStartDate:String , 

ProjectEndDate:String , 

ProjectAbstract:String 


})

module.exports = {
  Project : mongoose.model('Project', projectSchema),
}

