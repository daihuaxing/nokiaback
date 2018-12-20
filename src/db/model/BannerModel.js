const mongoose=require('mongoose');

const schema= mongoose.Schema;
var BannerSchema = new schema({
    id:{type:String,required:true},
    img:{type:String,required:true}
});
var BannerModel = mongoose.model('Banner', BannerSchema);

module.exports=BannerModel;