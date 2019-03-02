//验证输入的内容是否符合要求
//查找触发事件的元素  用户名  密码 电话号码 再次确认密码输入框
var txtName=document.getElementsByName("uname")[0];
var txtPwd=document.getElementsByName("upwd")[0];
var txtPhone=document.getElementsByName("phone")[0];
var txtRpwd=document.getElementsByName("rupwd")[0];
//获得焦点事件
txtRpwd.onfocus=txtPhone.onfocus=txtPwd.onfocus=txtName.onfocus=function(){
	var txt=this;//当前元素触发获得焦点事件
	//查找要修改的元素  span
	var span=txt.parentElement.nextElementSibling;
	//修改元素
	span.style.display="none";
}
//定义公共函数 设置两个形参 输入框的值 正则表达式
function vali(txt,reg){
	//查找要修改的元素 span
	var span=txt.parentElement.nextElementSibling;
	//如果正则表达式的测试结果为true
	if(reg.test(txt.value)){
		//让span隐藏
		span.style.display="none";
	}else{//否则
		//为span添加class vali_fail
		span.className="vali_fail";
		//并让span显示
		span.style.display="block";
	}
}
//用户名输入框引用vali函数，并传入实参 this,reg
txtName.onblur=function(){
	vali(this,/^\w{3,12}$/);
}
//密码输入框引用vali函数，并传入实参 this,reg
txtPwd.onblur=function(){
	vali(this,/^\d{6}$/);
}
//电话号码输入框引用vali函数，并传入实参 this,reg
txtPhone.onblur=function(){
	vali(this,/^1[3-8]\d{9}$/);
}
//再次确认密码输入框的失去焦点事件
txtRpwd.onblur=function(){
	var txt=this;
	//查找要修改的元素
	var span=txt.parentElement.nextElementSibling;
	//如果再次确认密码输入框的内容与密码输入框的内容相同时
	if(txtRpwd.value==txtPwd.value){
		//让span隐藏
		span.style.display="none";
	}else{//否则
		//为span添加class vali_fail
		span.className="vali_fail";
		//并让其隐藏
		span.style.display="block";
	}
}
//获取button按钮
/*var btn=document.getElementById("btn");
btn.onclick=function(){
	//1.创建XHR对象
	var xhr=new XMLHttpRequest();
	//2.绑定监听
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&xhr.status==200){
			var result=xhr.responseText
			var res=JSON.parse(result);
			console.log(res.code);
			if(res.code==-1){
				alert("用户名已存在");
			}else if(res.code==1){
				alert("注册成功");
				sessionStorage.setItem("$uname",res.$uname);
				//location.href="http://127.0.0.1:3000/drug_header.html?page=user_register"
				//绝对路径实现跨域
				location.href="http://127.0.0.1:3000/index.html?page=user_register";
			}
		}
	}
	//3.打开连接创建请求
	xhr.open("post","http://127.0.0.1:3000/user/register",true);
	var formdata="uname="+txtName.value+"&upwd="+txtPwd.value+"&phone="+txtPhone.value;
	//4.发送请求
	//修改请求头，可以发送任意文本
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}*/
$("#btn").click(function(){
	var $uname=$("[name=uname]").val();
	var $upwd=$("[name=upwd]").val();
	var $phone=$("[name=phone]").val();
	$.ajax({
		url:"http://127.0.0.1:3000/user/register",
		data:{uname:$uname,upwd:$upwd,phone:$phone},
		type:"post",
		dataType:"json",
		error:function(XMLHttpRequest,textStatus,errorThrown){
			console.log(XMLHttpRequest);
			console.log(textStatus);
			console.log(errorThrown);
		},
		success:function(result){
			console.log(result);
			console.log(typeof(result));
			if(result.code==1){
				alert("注册成功");
				sessionStorage.setItem("$uname",result.$uname);
				//location.href="http://127.0.0.1:3000/drug_header.html?page=user_register"
				//绝对路径实现跨域
				location.href="index.html?page=user_register";
			}else if(result.code==-1){
				alert("用户名已存在");
			}
		}
	})
});