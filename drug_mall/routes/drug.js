//引入express模块
const express=require("express");
//引入mysql连接池对象
const pool=require("../pool.js");
//创建空的路由器
const router=express.Router();
//添加查询路由
router.get("/detail",(req,res)=>{
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"*"
	});
	var $did=req.query.did;
	var sql="select * from drug_details where did=?";
	pool.query(sql,[$did],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.write(JSON.stringify(result));
			res.end();
		}else{
			res.write(JSON.stringify('detail err'));
			res.end();
		}
	});
});
router.get("/search",(req,res)=>{
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"*"
	});
	var $val=req.query.val;
	$val="%"+$val+"%";
	console.log($val);
	console.log(typeof($val));
	var sql="select did from drug_details where tname like ?";
	pool.query(sql,[$val],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.write(JSON.stringify(result));
            res.end();
		}else{
			res.write(JSON.stringify("search err"));
			res.end();
		}
	});
});
//把路由器公开
module.exports=router;
