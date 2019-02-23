//1.查找触发事件的元素
var tabs=document.querySelectorAll(
	"div.form-tab>a"
);
//2.绑定事件处理函数
for(var tab of tabs){
	tab.onclick=function(){
		var tab=this;
		//查找tabs中class为hover的tab
		var tab_hover=document.getElementsByClassName("hover")[0];
		//去掉其class
		tab_hover.className="";
		//再为当前发生点击事件的tab添加class  hover
		tab.className="hover";
		var div1=document.getElementById("login_1");
		var div2=document.getElementById("login_2");
		if(tab.innerHTML=="账号登录"){//如果tab的内容为账号登录
			//4.修改元素  就让div1显示，div2隐藏
			div1.style.display="block";
			div2.style.display="none";
		}else if(tab.innerHTML=="快捷登录"){//如果tab的内容为快捷登录
			//4.修改元素  就让div1隐藏，div2显示
			div1.style.display="none";
			div2.style.display="block";
		}
	}
}
//点击按钮发送ajax请求
var btn=document.getElementById("btn");
var txtName=document.getElementsByName("uname")[0];
var txtPwd=document.getElementsByName("upwd")[0];
btn.onclick=function(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var result=xhr.responseText;
			var res=JSON.parse(result);
			console.log(res);
			if(res.code==1){
				alert("登录成功");
				//3.将用户名保存 sessionStorage
				sessionStorage.setItem("uname",res.uname);
				//location.href="http://127.0.0.1:3000/drug_header.html?page=user_login"
				location.href="http://127.0.0.1:5500/public/index.html?page=user_login"
			}else if(res.code==-1){
				alert("用户名或密码错误");
				location.href="http://127.0.0.1:5500/public/user_login.html"
			}
		}else{
			console.log(xhr.readyState);
			console.log(xhr.status);
		}
	}
	xhr.open("post","http://127.0.0.1:3000/user/login",true);
	var formdata="uname="+txtName.value+"&upwd="+txtPwd.value;
	//4.发送请求
	//修改请求头，可以发送任意文本
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}