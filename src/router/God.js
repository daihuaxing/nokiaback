const express=require('express');
const router=express.Router();
const tools=require('../tool/GodTool.js')
//用户的注册和登录
const GodCtrl=require('../controller/God.controller.js')

router.post('/reg',GodCtrl.reg);

router.post('/login',GodCtrl.login);

router.post('/test',tools.checkTokenMiddle,(req,res)=>{
    console.log(222)
    res.send(req.user)
})//非法请求
// 中间件   next 下一个中间件执行  通过中间件来实现token的验证
module.exports=router;