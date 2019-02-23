//引入express模块
const express=require("express");
//引入数据库连接池模块
const pool=require("../pool");
//创建空的路由器
var router=express.Router();
//添加注册路由
router.post('/register',(req,res)=>{
	var obj=req.body;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $code=400;
	for(var key in obj){
		$code++;
		if(!obj[key]){
			res.send({code:$code,msg:[key]+' '+'required'});
		}
	}
	var sql="SELECT uname,upwd,phone FROM user WHERE uname=? AND upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:-1,msg:"用户名已存在"});
			return;
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
							res.send({code:1,$uname});
						}
					});
				}
			});
		}
	});
});
//添加用户登录路由
router.post('/login',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("<script>alert('用户名不能为空');location.href='http://127.0.0.1:3000/user_login.html'</script>");
		return;
	}
	if(!$upwd){
		res.send("<script>alert('密码不能为空');location.href='http://127.0.0.1:3000/user_login.html'</script>");
		return;
	}
	var sql="select * from user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			var uid=result[0].uid;
			var uname=result[0].uname;
			//req.session.uid=uid;
			//req.session.uname=uname;
			res.send({code:1,uname});
		}else{
			res.send({code:-1,msg:"用户名或密码错误"});
		}
	});
});
//把路由器公开
module.exports=router;