//引入express模块
const express=require("express");
//引入数据库连接池模块
const pool=require("../pool");
//创建空的路由器
var router=express.Router();
//创建路由
router.get('/details',(req,res)=>{
	var output={
		drug:{/*dname,brand,dosage,company...*/},
		pics:[/*{sm,md,lg},{sm,md,lg},{sm,md,lg}...*/],
		list:[/*{img,lname,guige,dosage,location,cName}...*/]
	};
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"*"
	});
	var $did=req.query.did;
	if($did!==undefined){
		//查询一个商品的详细信息
		var sql="SELECT tname,dname,brand,dosage,company,ada FROM drug_details";
			sql+=" WHERE did=?";
		pool.query(sql,[$did],(err,result)=>{
			if(err) throw err;
			if(result.length!=0){
				//console.log(result);
				output.drug=result[0];
				//console.log(output.drug);
				//查询一个商品的对应图片  sm md lg
				var sql="SELECT sm,md,lg FROM drug_pics WHERE pics_id=?";
				pool.query(sql,[$did],(err,result)=>{
					if(err) throw err;
					if(result.length!=0){
						output.pics=result;
						//console.log(output.pics);
						//查询一个商品对应的商品列表
						var sql="SELECT img,lname,guige,dosage,location,cName";
							sql+=" FROM drug_list";
							sql+=" WHERE list_id=?";
						pool.query(sql,[$did],(err,result)=>{
							if(err) throw err;
							//console.log(result);
							output.list=result; 
							res.write(JSON.stringify(output));
							res.end();
						});
					}
				});
			}else{
				res.write(JSON.stringify(output));
				res.end();
			}
		});
		
	}else{
		res.write(JSON.stringify(output));
		res.end();
	}
});
router.get("/getMore",(req,res)=>{
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"*"
	});
	var $did=req.query.did;
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;
	//设置默认值 pno=1 pageSize=3
	if(!pno){ pno=1 }
	if(!pageSize){ pageSize=3 }
	var sql="SELECT img,lname,guige,dosage,location,cName";
		sql+=" FROM drug_list";
		sql+=" WHERE list_id=?";
		sql+=" LIMIT ?,?";
	var ps=parseInt(pageSize);
	var offset=(pno-1)*pageSize;
	pool.query(sql,[$did,offset,ps],(err,result)=>{
		if(err) throw err;
		res.write(JSON.stringify(result));
        res.end();
		
	});
});
//把路由公开
module.exports=router;