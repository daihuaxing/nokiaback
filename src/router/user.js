const express=require('express');
const router=express.Router();
const tools=require('../tool/userTool.js');
//用户的注册和登录
const UserCtrl=require('../controller/user.controller.js');

router.post('/reg',UserCtrl.reg);

router.post('/login',UserCtrl.login);

router.post('/test',tools.checkTokenMiddle,(req,res)=>{
    res.send(req.user);
})//非法请求
// 中间件   next 下一个中间件执行  通过中间件来实现token的验证
module.exports=router;