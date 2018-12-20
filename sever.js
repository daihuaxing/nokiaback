const express=require('express');
const app=express();
const path=require('path');
// post 数据解析
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//设置静态资源目录
app.use(express.static(path.join(__dirname,'./static')));
// 链接数据库
 const connect=require('./src/db/connect.js');
// const add=require('./src/router/add.js');
// const del=require('./src/router/del.js');
// const get=require('./src/router/get.js');
// const update=require('./src/router/update.js');
const God=require('./src/router/God.js');
const user=require('./src/router/user.js');
//  app.use('/add',add);
// app.use('/del',del);
// app.use('/get',get);
// app.use('/update',update);
app.use('/God',God);
app.use('/user',user);
app.listen(3000,()=>{
    console.log('sever start in port'+30000)
});