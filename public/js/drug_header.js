//查找触发事件的元素  input输入框  搜索按钮
/*var content=document.getElementsByName("content")[0];
var search=document.getElementById("search");
//为搜索按钮绑定点击事件
search.onclick=function(){
	//用正则表达式只匹配输入框中输入的汉字  返回值为数组对象
	var value=content.value.match(/[\u4E00-\u9FA5]+/g);
	//创建一个空字符串
	var val="";
	//遍历数组对象
	for(var i=0;i<value.length;i++){
		//把遍历结果组成新的字符串
		val+=value[i];
	}
	//发送ajax请求
	//1.创建异步对象xhr
	var xhr=new XMLHttpRequest();
	//2.绑定监听
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			//返回结果为JSON字符串
			var result=xhr.responseText;
			//解析字符串得到数组对象，并选中第一个
			var res=JSON.parse(result)[0];
			//res{did:3}
			var did=res.did;
			//在父页面打开新页面
			//绝对路径实现跨域
			parent.location.href="http://127.0.0.1:3000/drug_details.html?did="+did;
		}
	}
	//3.打开连接创建请求
	xhr.open("get","http://127.0.0.1:3000/drug/search?val="+val,true);
	//发送请求
	xhr.send(null);
}
*/
//为搜索按钮绑定点击事件
$("#search").click(function(){
	//console.log(111);
	var content=document.getElementsByName("content")[0];
	//用正则表达式只匹配输入框中输入的汉字  返回值为数组对象
	var value=content.value.match(/[\u4E00-\u9FA5]+/g);
	//创建一个空字符串
	var val="";
	//遍历数组对象
	for(var i=0;i<value.length;i++){
		//把遍历结果组成新的字符串
		val+=value[i];
	}
	//发送ajax请求
	//1.创建异步对象xhr
	$.ajax({
		url:"http://127.0.0.1:3000/drug/search?val="+val,
		type:"get",
		dataType:"json",
		success:function(result){
			console.log(111);
			var did=result[0].did;
			//console.log(did);
			if(did){
				parent.location.href="drug_details.html?did="+did;
			}
		}
	});
})
/*用户登陆成功后跳转到此页面在header部分显示欢迎回来x'x'x*/
//获取当前页面的网址
var href=window.parent.location.href;
//console.log(href);
//按=切割获取page的值
var lastPage=href.split("=")[1];
//console.log(lastPage);
//获取内容要发生改变的元素span
var span=document.querySelector("div.right_nav>span:first-child");
//如果page=use_login,说明是从登录页面跳转来的
if(lastPage=="user_login"){
	//获得已经储存的session值uname
	var uname=sessionStorage.getItem("uname");
	//console.log(uname);
	if(uname){//如果uname存在
		//让span的内容变为“欢迎回来  xxx  退出”
		span.innerHTML="欢迎回来"+" "+uname+" "+"<a href='javascript:;'>退出</a>";
		//parent.location.href="http://127.0.0.1:3000/index.html";
	}else{//否则先登录并跳转到登录页面
		alert("请先登录");
		parent.location.href="user_login.html";
	}
	//查找已经添加的a元素  退出 
	var a=document.querySelector("div.right_nav>span:first-child>a");
	a.onclick=function(){
		alert("确定要退出吗？");
		//点击确定后跳转到登录页面
		parent.location.href="user_login.html";
	}
}else if(lastPage=="user_register"){//如果page=use_login,说明是从注册页面跳转来的
	//var span=document.querySelector("div.right_nav>span:first-child");
	//获得已经储存的session值$uname
	var $uname=sessionStorage.getItem("$uname");
	//console.log($uname);
	if($uname){//如果$uname存在
		//让span的内容变为“欢迎您  xxx  退出”
		span.innerHTML="欢迎您"+" "+$uname+" "+"<a href='javascript:;'>退出</a>";
		//parent.location.href="http://127.0.0.1:3000/index.html";
	}else{//否则先注册并跳转到注册页面
		alert("请先注册");
		parent.location.href="user_register.html";
	}
	//查找已经添加的a元素  退出 
	var a=document.querySelector("div.right_nav>span:first-child>a");
	a.onclick=function(){
		alert("确定要退出吗？");
		//点击确定后跳转到登录页面
		parent.location.href="user_login.html";
	}
}
