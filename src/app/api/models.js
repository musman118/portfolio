
const  mongoose  = require('mongoose');
const BlogSchema = new mongoose.Schema({
  id:{type:Number,unique:true,autoincrement:true},
  title: String,
  description: String,
  date: Date,
  markdown: String
  
  

});



module.exports = BlogSchema;