const mongoose=require('mongoose')

const schema= mongoose.Schema;
var UserSchema = new schema({
    user:{type:String,required:true},
    pass:{type:String,required:true},
    headImg:{type:String,required:false},
    buyCar:[{
        orderId:{type:Number,required:false},
        Number:{type:Number,required:false}
    }],
    allOder:[{
        orderId:{type:Number,required:false},
        Number:{type:Number,required:false}
    }],
    noPay:[{
        orderId:{type:Number,required:false},
        Number:{type:Number,required:false}
    }],
    noDelivery:[{
        orderId:{type:Number,required:false},
        Number:{type:Number,required:false}
    }],
    noReceiving:[{
        orderId:{type:Number,required:false},
        Number:{type:Number,required:false}
    }],
    myAddress:{type:String,required:false}
});
var UserModel = mongoose.model('User', UserSchema);
module.exports=UserModel;