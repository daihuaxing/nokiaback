const mongoose=require('mongoose')

const schema= mongoose.Schema
var GodSchema = new schema({
    user:{type:String,required:true},
    pass:{type:String,required:true}
});
var GodModel = mongoose.model('God',GodSchema);

module.exports=GodModel;