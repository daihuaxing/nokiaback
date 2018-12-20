const God=require('../db/model/GodModel.js');
const bcrypt=require('bcrypt')
const tools=require('../tool/userTool.js');
//注册登录
let reg=(req,res)=>{
	//获取信息
	// 用户名是否存在
	// 密码加密
	// 入库
	let {user,pass,secret}=req.body;
	if(secret !== "dhx"){
		res.send("非工作人员不得注册！！！")
	}else {
        God.find({user})
            .then((data) => {
                //查询成功
                if (data.length >= 1) {
                    throw '用户名已存在'
                } else {
                    // 密码加密操作
                    var salt = bcrypt.genSaltSync(10);
                    var hash = bcrypt.hashSync(pass, salt);
                    return God.insertMany({user: user, pass: hash});
                }
            })
            .then((data) => {
                res.send({err: 0, msg: 'reg ok'})
            })
            .catch((error) => {
                res.send({err: -1, msg: error})
            })
    }
}
let login=(req,res)=>{
	 //获取数据
	// hash验证
	// 产生token
	// 返回数据 token
     let {user,pass}=req.body;
    God.find({user})
     .then((data)=>{
     	// 
     	if (data.length==0) {
           throw '用户名不存在'
     	}
       let hash=data[0]['pass']
       let result=bcrypt.compareSync(pass, hash);
       if (!result) {
       	throw '密码错误'
       }
       //创建token
       let token=tools.createToken(user)
       //返回数据
        res.send({err:0,msg:"login ok",token:token})
     })
     .catch((error)=>{
     	res.send({err:-1,msg:error})
     })
   
}
let test=(req,res)=>{
	res.send('test')
}
module.exports={
	reg,
	login,
	test
}