/******轮播图******/
function task(){
	//查找触发事件的元素
	var showImage=document.querySelector(
		"#images>img.show"
	);
	var showI=document.querySelector(
		"div.circle>i.show"	
	)
	showImage.className="";
	showI.className="";
	if(showImage.nextElementSibling!=null){
		showImage.nextElementSibling.className="show";
	}else{
		showImage.parentNode.children[0].className="show";
	}
	if(showI.nextElementSibling!=null){
		showI.nextElementSibling.className="show";
	}else{
		showI.parentNode.children[0].className="show";
	}
}
var n=setInterval(task,3000);
var div=document.getElementById("images");
//当鼠标进入时停止定时器
div.onmouseover=function(){
	clearInterval(n);
}
//当鼠标移出时启动定时器
div.onmouseout=function(){
	n=setInterval(task,3000)
}
/*******热门品牌********/
//1.查找触发事件的元素
var tds=document.querySelectorAll(
	"div.hotbrand_images>table>tbody>tr>td"
);
//2.绑定事件处理函数
for(var td of tds){
	td.onmouseover=function(){
		var td=this;
		//3.查找要修改的元素
		var div=td.children[0].children[0];
		//4.修改元素
		div.style.zIndex=10;
	}
	td.onmouseout=function(){
		var td=this;
		//3.查找要修改的元素
		var div=td.children[0].children[0];
		//4.修改元素
		div.style.zIndex=0;
	}
}
/*banner右侧部分切换*/
//1.查找触发事件的元素   两个a  两个ul
var As=document.querySelectorAll("div.right>div>a");
for(var a of As){
	a.onmouseover=function(){
		var a=this;
		a.className="";
		if(a.nextElementSibling!=null){
			a.nextElementSibling.className="active";
			var ul=document.querySelector("div.right>ul:nth-child(2)");
			ul.style.display="block";
			ul.nextElementSibling.style.display="none";
		}else{
			a.previousElementSibling.className="active";
			var ul=document.querySelector("div.right>ul:nth-child(3)");
			ul.style.display="block";
			ul.previousElementSibling.style.display="none";
		}
	}
}
/*家庭必备、慢性病药、男科用药、妇科用药、儿童用药的中间部分*/
//1.查找触发事件的元素
var divs=document.querySelectorAll(
			"div.container_middle>ul>li"
		);
//2.绑定事件处理函数
for(var div of divs){
	div.onmouseover=function(){
		var div=this;
		//3.查找要修改的元素
		//4.修改元素
		div.children[4].style.display="block";
	}
	div.onmouseout=function(){
		var div=this;
		div.children[4].style.display="none";
	}
}