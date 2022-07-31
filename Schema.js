var mongoose =require("mongoose");
  const productschema = new mongoose.Schema({
    
    name: {
     type: String,
    required:true},

     password:{
      type:Number,
      required:true
    
     }
    
})
module.exports=mongoose.model("users",productschema);