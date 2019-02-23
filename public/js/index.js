/*banner部分的轮播图*/
/******轮播图******/
var task=function(){
	//查找触发事件的元素
	var showDiv=document.querySelector(
		"div.banner>div.middle>div#images>div.show"
	);
	var showI=document.querySelector(
		"div.circle>i.show"	
	)
	showI.className="";
	showDiv.className="";
	if(showDiv.nextElementSibling!=null){
		showDiv.nextElementSibling.className="show";
	}else{
		showDiv.parentNode.children[0].className="show";
	}
	
	if(showI.nextElementSibling!=null){
		showI.nextElementSibling.className="show";
	}else{
		showI.parentNode.children[0].className="show";
	}
}
var n=setInterval(task,3000);
var div=document.querySelector("div.banner>div.middle>div#images");
//当鼠标进入时停止定时器
div.onmouseover=function(){
	clearInterval(n);
}
//当鼠标移出时启动定时器
div.onmouseout=function(){
	n=setInterval(task,3000)
}
/*1F 2F 3F 4F 5F中的轮播图*/
//以1F为例
//1.查找触发事件的元素   左侧按钮
var F1_btnLeft=document.querySelector(
"div.F1>div.content>div.content_left>div.box>div.btn>div.btn_left"
);
//右侧按钮
var F1_btnRight=document.querySelector(
"div.F1>div.content>div.content_left>div.box>div.btn>div.btn_right"
);
//2.绑定事件处理函数
F1_btnLeft.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F1>div.content>div.content_left>div.box>div#images>div.show"
	);
	Previous(showDiv);//showDiv为实参
}
F1_btnRight.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F1>div.content>div.content_left>div.box>div#images>div.show"
	);
	Next(showDiv);//showDiv为实参
}
//2F
//左侧按钮
var F2_btnLeft=document.querySelector(
"div.F2>div.content>div.content_left>div.box>div.btn>div.btn_left"
);
//右侧按钮
var F2_btnRight=document.querySelector(
"div.F2>div.content>div.content_left>div.box>div.btn>div.btn_right"
);
//2.绑定事件处理函数
F2_btnLeft.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F2>div.content>div.content_left>div.box>div#images>div.show"
	);
	Previous(showDiv);//showDiv为实参
}
F2_btnRight.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F2>div.content>div.content_left>div.box>div#images>div.show"
	);
	Next(showDiv);//showDiv为实参
}
//3F
//左侧按钮
var F3_btnLeft=document.querySelector(
"div.F3>div.content>div.content_left>div.box>div.btn>div.btn_left"
);
//右侧按钮
var F3_btnRight=document.querySelector(
"div.F3>div.content>div.content_left>div.box>div.btn>div.btn_right"
);
//2.绑定事件处理函数
F3_btnLeft.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F3>div.content>div.content_left>div.box>div#images>div.show"
	);
	Previous(showDiv);//showDiv为实参
}
F3_btnRight.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F3>div.content>div.content_left>div.box>div#images>div.show"
	);
	Next(showDiv);//showDiv为实参
}
//4F
//左侧按钮
var F4_btnLeft=document.querySelector(
"div.F4>div.content>div.content_left>div.box>div.btn>div.btn_left"
);
//右侧按钮
var F4_btnRight=document.querySelector(
"div.F4>div.content>div.content_left>div.box>div.btn>div.btn_right"
);
//2.绑定事件处理函数
F4_btnLeft.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F4>div.content>div.content_left>div.box>div#images>div.show"
	);
	Previous(showDiv);//showDiv为实参
}
F4_btnRight.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F4>div.content>div.content_left>div.box>div#images>div.show"
	);
	Next(showDiv);//showDiv为实参
}
//5F
//左侧按钮
var F5_btnLeft=document.querySelector(
"div.F5>div.content>div.content_left>div.box>div.btn>div.btn_left"
);
//右侧按钮
var F5_btnRight=document.querySelector(
"div.F5>div.content>div.content_left>div.box>div.btn>div.btn_right"
);
//2.绑定事件处理函数
F5_btnLeft.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F5>div.content>div.content_left>div.box>div#images>div.show"
	);
	Previous(showDiv);//showDiv为实参
}
F5_btnRight.onclick=function(){
	var showDiv=document.querySelector(//查找class为show的div
	"div.F5>div.content>div.content_left>div.box>div#images>div.show"
	);
	Next(showDiv);//showDiv为实参
}
/*公共点击事件*/
//向左轮播
var Previous=function(showDiv){//showDiv为形参
	//当发生点击事件时先清除class为show的div的class
	showDiv.className="";
	//如果class为show的div的前一个兄弟不为空
	if(showDiv.previousElementSibling!=null){
		//就让前一个兄弟的class为show
		showDiv.previousElementSibling.className="show";
	}else{//否则就让当前div保持class为show
		showDiv.parentNode.children[0].className="show";
	}
}
//向右轮播
var Next=function(showDiv){//showDiv为形参
	//当发生点击事件时先清除class为show的div的class
	showDiv.className="";
	//如果class为show的div的下一个兄弟不为空
	if(showDiv.nextElementSibling!=null){
		//就让下一个兄弟的class为show
		showDiv.nextElementSibling.className="show";
	}else{//否则就让当前div保持class为show
		showDiv.parentNode.children[3].className="show";
	}
}


/*家庭必备、慢性病药、男科用药、妇科用药、儿童用药的中间部分*/
//1.查找触发事件的元素 所有的content_right中ul中li
var lis=document.querySelectorAll(
			"div.content>div.content_right>div>ul>li"
		);
//2.绑定事件处理函数
for(var li of lis){//遍历
	li.onmouseover=function(){//使每一个li发生mouseover事件
		var li=this;//当前li
		//修改当前li中class为gx的div显示状态   //在mouseover事件中使其显示
		li.children[4].style.display="block";
	}
	li.onmouseout=function(){
		var li=this;
		//修改当前li中class为gx的div显示状态   //在mouseout事件中使其隐藏
		li.children[4].style.display="none";
	}
}
//1.查找触发事件的元素   //根据自定义属性data-toggle查找class为F1中的每一个a标签
/*1楼*/
var tabs_F1=document.querySelectorAll(
		"div.F1>div.title>div.title_right>[data-toggle=tab]"
); 
for(var tab of tabs_F1){//遍历
	tab.onmouseover=function(){//当鼠标移入时
		var divs=document.querySelectorAll(//查找需要显示的div
			"div.F1>div.content>div.content_right>div"
		);
		mouseOver(this,divs);//调用mouseOver函数，并传入参数  this->当前tab divs->需要在函数中执行显示状态的元素
	}
	tab.onmouseout=function(){//当鼠标移出时
		mouseOut(this);//调用mouseOut，并传入参数  this->当前tab
	}
}
/*2楼*/
var tabs_F2=document.querySelectorAll(
		"div.F2>div.title>div.title_right>[data-toggle=tab]"
); 
for(var tab of tabs_F2){
	tab.onmouseover=function(){
		var divs=document.querySelectorAll(
			"div.F2>div.content>div.content_right>div"
		);
		mouseOver(this,divs);
	}
	tab.onmouseout=function(){
		mouseOut(this);
	}
}
/*3楼*/
var tabs_F3=document.querySelectorAll(
		"div.F3>div.title>div.title_right>[data-toggle=tab]"
); 
for(var tab of tabs_F3){
	tab.onmouseover=function(){
		var divs=document.querySelectorAll(
			"div.F3>div.content>div.content_right>div"
		);
		mouseOver(this,divs);
	}
	tab.onmouseout=function(){
		mouseOut(this);
	}
}
/*4楼*/
var tabs_F4=document.querySelectorAll(
		"div.F4>div.title>div.title_right>[data-toggle=tab]"
); 
for(var tab of tabs_F4){
	tab.onmouseover=function(){
		var divs=document.querySelectorAll(
			"div.F4>div.content>div.content_right>div"
		);
		mouseOver(this,divs);
	}
	tab.onmouseout=function(){
		mouseOut(this);
	}
}
/*5楼*/
var tabs_F5=document.querySelectorAll(
		"div.F5>div.title>div.title_right>[data-toggle=tab]"
); 
for(var tab of tabs_F5){
	tab.onmouseover=function(){
		var divs=document.querySelectorAll(
			"div.F5>div.content>div.content_right>div"
		);
		mouseOver(this,divs);
	}
	tab.onmouseout=function(){
		mouseOut(this);
	}
}
//把相同部分封装成函数
//鼠标移入函数
var mouseOver=function(tab,divs){
	var I=tab.children[0];//I为鼠标移入时显示在tab下方的小三角
	I.style.display="inline-block";//当鼠标移入时小三角显示
	for(var div of divs){//遍历每个tab绑定的div
		div.style.display="none";//先使其隐藏
	}
	var id=tab.getAttribute("data-target");//查找当前tab对应的id
	//再找到当前tab对应的ul
	var div=document.querySelector(id);//利用已获得的id查找与当前tab对应的div
	div.style.display="block";//使其显示
}
//鼠标移出函数
var mouseOut=function(tab){
	var I=tab.children[0];//查找当前tab下方的小三角
	I.style.display="none";//使其隐藏
}
/*电梯*/
//查找ul中每一个li
var lis=document.querySelectorAll(
		"ul.elevator>li"
);
for(var i=0;i<lis.length;i++){//遍历所有的li
	(function(i){//匿名函数自调  此处的i为形参
		lis[i].onclick=function(){
			var li=this;//当前li
			var li_show=document.querySelectorAll("ul.elevator>li.show")[0];
			li_show.className="";
			li.className="show";
			var s=622;//s为F1,F2,F3,F4,F5的高度
			s=800+s*i;//800为电梯显示时滚动条距离顶部的高度
			window.scrollTo(0,s);//执行滚动事件，s为当前滚动条应距离顶部的高度
		}
	})(i)//i为实参
}
window.onscroll=function(){
	var scrollTop=document.body.scrollTop ||
							 document.documentElement.scrollTop//为了解决浏览器兼容性问题
	var lis=document.querySelectorAll(
		"ul.elevator>li"
	)
	var Is=[0,800,1422,2044,2666,3288,3910];//滚动条距离浏览器顶部的高度数组
	for(var li of lis){
		li.className="";//初始化li
	}
	if(scrollTop>=Is[1]&&scrollTop<Is[6]){//当滚动条与浏览器顶部的距离在800~3910之间时
		document.querySelector("div.Top").style.display="block";//让顶部导航栏显示
		document.querySelector("ul.elevator").style.display="block";//当电梯显示
		if(scrollTop>=Is[1]&&scrollTop<Is[2]){
			//当滚动条与浏览器顶部的距离在800~1422之间时
			lis[0].className="show";//让中西药品部分显示
		}else if(scrollTop>=Is[2]&&scrollTop<Is[3]){
			//当滚动条与浏览器顶部的距离在1422~2044之间时
			lis[1].className="show";//让养生保健部分显示
		}else if(scrollTop>=Is[3]&&scrollTop<Is[4]){
			//当滚动条与浏览器顶部的距离在2044~2666之间时
			lis[2].className="show";//让医疗器械部分显示
		}else if(scrollTop>=Is[4]&&scrollTop<Is[5]){
			//当滚动条与浏览器顶部的距离在2666~3288之间时
			lis[3].className="show";//让中药饮片部分显示
		}else if(scrollTop>=Is[5]&&scrollTop<Is[6]){
			//当滚动条与浏览器顶部的距离在3288~3910之间时
			lis[4].className="show";//让美容护肤部分显示
		}
	}else{//否则就让顶部导航栏和电梯隐藏
		document.querySelector("div.Top").style.display="none";
		document.querySelector("ul.elevator").style.display="none";
	}
}
/*用户登陆成功后跳转到此页面在header部分显示欢迎回来x'x'x*/
/*var span=document.querySelector("div.right_nav>span:first-child");
var uname=sessionStorage.getItem("uname");
if(!uname){
	span.innerHTML="欢迎回来  "+uname;
}*/