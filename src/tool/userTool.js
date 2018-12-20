//产生token
//验证token中间件


const jwt=require('jsonwebtoken');
const screact='I_LOVE_YOU_User';

let createToken=(user)=>{
	console.log(user);
	let payload={
		us:user
	};
	//签名的私钥
	 let result= jwt.sign(payload, screact,{expiresIn:'2h'});
	 console.log(result);
	 return result
};

let checkTokenMiddle=(req,res,next)=>{
   //验证token
   let {token}=req.body;
   
   jwt.verify(token,screact,(err,data)=>{
   	if (err) { return res.send({err:-999,msg:'token验证失败'})}
   	  let user=data.us;
   	req.user=user;
   	 next()
   })
};

module.exports={
	createToken,
	checkTokenMiddle
};