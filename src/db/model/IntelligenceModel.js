const mongoose=require('mongoose')

const schema= mongoose.Schema
var IntelligenceSchema = new schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    newPrice:{type:String,required:true},
    oldPrice:{type:String,required:true},
    img:{type:String,required:true},
    size:{type:String,required:true},
    time:{type:Numer,required:true},
    pre:{type:Boolean,default:false}
});
var  IntelligenceModel = mongoose.model('Intelligence', IntelligenceSchema);

module.exports= IntelligenceModel;