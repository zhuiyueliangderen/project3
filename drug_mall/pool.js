//����expressģ��
const mysql=require('mysql');
//����mysql���ӳ�
var pool=mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"mall",
	connectionLimit:20
});
module.exports=pool;
