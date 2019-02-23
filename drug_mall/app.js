//引入express模块
const express=require('express');
//引入user路由器模块
const userRouter=require("./routes/user.js");
//引入drug路由器模块
const drugRouter=require("./routes/drug.js");
//引入details路由器模块
const drugDetails=require("./routes/details.js");
//引入body-parser第三方中间件
const bodyParser=require('body-parser');
//下载express-session并配置
//const session=require("express-session");
//加载跨域访问模块 并配置
const cors=require("cors");
//创建web服务器
var server=express();
//监听3000端口
server.listen(3000);
//托管静态资源到public
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:false
}));
/*server.use(session({
	secret:"128位随机字符",//安全字符串
	resave:false,//每次请求是否都需要更新数据
	saveUninitialized:true,//初始化时保存数据
	cookie:{
		maxAge:1000*60*60*8//保存时长
	}
}));*/
server.use(cors({
	origin:["http://127.0.0.1:5500","http://localhost:5500"],
	credentials:true
}));
//把user路由器挂载到/user下
server.use('/user',userRouter);
//把drug路由器挂载到/drug下
server.use("/drug",drugRouter);
//把details路由器挂载到/details下
server.use("/details",drugDetails);
