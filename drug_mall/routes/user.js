//引入express模块
const express=require("express");
//引入数据库连接池模块
const pool=require("../pool");
//创建空的路由器
var router=express.Router();
//添加注册路由
router.post('/register',(req,res)=>{
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"*"
	});
	var obj=req.body;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $code=400;
	for(var key in obj){
		$code++;
		if(!obj[key]){
			res.write(JSON.stringify({code:$code,msg:[key]+' '+'required'}));
			res.end();
		}
	}
	var sql="SELECT uname,upwd,phone FROM user WHERE uname=? AND upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.write(JSON.stringify({code:-1,msg:"用户名已存在"}));
			res.end();
			
		}else{
			var sql="INSERT INTO user VALUES(null,?,?,?)";
			pool.query(sql,[$uname,$upwd,$phone],(err,result)=>{
				if(err) throw err;
				if(result.affectedRows>0){
					var sql="SELECT uname From user WHERE uname=? AND upwd=?";
					pool.query(sql,[$uname,$upwd],(err,result)=>{
						if(err) throw err;
						console.log(result);
						if(result.length>0){
							var $uname=result[0].uname;
							res.write(JSON.stringify({code:1,$uname}));
							res.end();
						}
					});
				}
			});
		}
	});
});
//添加用户登录路由
router.post("/login",(req,res)=>{
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"*"
	});
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.write(JSON.stringify("<script>alert('用户名不能为空');location.href='http://127.0.0.1:3000/user_login.html'</script>"));
		res.end();
	}
	if(!$upwd){
		res.write(JSON.stringify("<script>alert('密码不能为空');location.href='http://127.0.0.1:3000/user_login.html'</script>"));
		res.end();
	}
	var sql="select * from user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			var uid=result[0].uid;
			//console.log(uid);
			var uname=result[0].uname;
			console.log(uname);
			//req.session.uid=uid;
			//req.session.uname=uname;
			res.write(JSON.stringify({code:1,uname}));
			res.end();
		}else{
			res.write(JSON.stringify({code:-1,msg:"用户名或密码错误"}));
			res.end();
		}
	});
});
//把路由器公开
module.exports=router;