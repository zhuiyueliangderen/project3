$(function(){
	//获得地址栏中的search部分
	var search=location.search;
	if(search!==""){
		//将search按=切割，取第2部分
		var did=search.split("=")[1];//[?did,3];//3\
		$.ajax({
			url:"http://127.0.0.1:3000/details/details?did="+did,
			type:"get",
			dataType:"json",
			/*xhrFields:{
				withCredentials:true
			},*/
			success:function(output){
				//从output大对象中解构出三个小部分分别使用
				var {drug,pics,list}=output;
				//1.将商品信息显示到右上方的对应元素中
				$("h1.pr0>strong").html(drug.tname);
				$("div.info>dl>dd:first>strong")
					.html(drug.dname)
					.parent().next().next()
					.html(drug.brand);
				$("div.info>dl>dd:eq(3)")
					.html(drug.dosage)
					.next().next()
					.html(drug.company);
				$("div.info>dl>dd:eq(7)>strong")
					.html(drug.ada);
				//2.将图片列表动态生成到左边的放大镜中
				//2.1将小图片生成列表，放到放大镜底部
				var html="";
				for(var p of pics){
					html+=`<a href="javascipt:;" class="p">
							<img src="${p.sm}" data-md="${p.md}" data-lg="${p.lg}">
						</a>`;
				}
				$("div.pic_list").append(html);
				$("div.pic_list").css("width",92*pics.length);
				//3.2 取出第一张图片的中图片版本，放在中图片中
				$("img.imgzoom")
				.attr("src",pics[0].md);
				//3.3 取出第一张图片的大图片版本，放在右边的大图中
				//删除div.superpic中
				//$("div.superpic").css("display",block);
				$("div#superpic")
				.css("background-image",`url(${pics[0].lg})`)
				/*放大镜效果*/
				//小图片列表左右移动
				//如果pics图片的张数小于4，就禁用右边的按钮
				if(pics.length<4){
					$("span.btn_right")
					.addClass("disabled");
				}
				//查找要修改的图片集合
				var $Images=$("div.pic_list");
				//定义moved保存已经左移的a的个数
				var moved=0;
				//单击右边按钮向左移动一个a
				$("span.btn_right").click(function(){
					var $btnRight=$(this);
					//如果当前按钮不是禁用的
					if(!$btnRight.is(".disabled")){
						moved++;//左移的a个数+1
						//图片集合的margin-left永远等于moved*-92
						$Images.css("margin-left",-92*moved);
						//如果多余的a已经移动完了，就禁用当前按钮
						if(pics.length-moved==4){
							$btnRight.addClass("disabled");
						}
						//只要右边按钮点了一下，左边按钮就启用
						$btnRight.nextAll("a").removeClass("disabled");
					}
				});
				//点击左边按钮向右一个a
				$("span.btn_left").click(function(){
					var $btnLeft=$(this);
					//如果当前按钮不是禁用的
					if(!$btnLeft.is(".disabled")){
						moved--;//右移的a个数+1
						//图片集合的margin-left永远等于moved*92
						$Images.css("margin-left",-92*moved);
						//如果多余的a已经移动完了，就禁用当前按钮
						if(moved==0){
							$btnLeft.addClass("disabled");
						}
						//只要左边按钮点一下，右边按钮就启用
						$btnLeft.nextAll("a").removeClass("disabled");
					}
				});
				/*鼠标进入小图片切换中图片和大图片*/
				//1.保存中图片元素和大图片
				var $mImg=$("img.imgzoom");
				var $lgDiv=$("div#superpic");
				var $Images=$("div.pic_list");
				//利用冒泡为$Images绑定鼠标进入
				//当鼠标进入img时才触发
				$Images.on("mouseenter","img",function(){
					var $img=$(this);
					//获得当前图片的data-md和data-lg,分别给中图片和大图片设置新路径
					$mImg.attr("src",$img.attr("data-md"));
					$lgDiv.css("background-image",`url(${$img.attr("data-lg")})`);
				});
				/*鼠标进出中图片控制遮罩层和大图片的显示与隐藏*/
				//查找遮罩层
				var $mask=$("#mask");
				//查找supermask:作为中图片和遮罩层的保护层
				var $smask=$("#supermask");
				//为supermask绑定鼠标进入和鼠标移出事件
				$smask.hover(
					function(){
						//当鼠标进入时都显示
						$mask.css("display","block");
						$lgDiv.css("display","block");
					},
					function(){
						//当鼠标移出时都隐藏
						$mask.css("display","none");
						$lgDiv.css("display","none");
					}
				)
				//为supermask绑定鼠标移动事件
				.mousemove(function(e){
					var offsetX=e.offsetX;
					var offsetY=e.offsetY;
					var top=offsetY-169/2;
					var left=offsetX-169/2;
					//如果top<0 就让top=0
					if(top<0){ top=0 }
					//如果top>169 就让top=169
					if(top>169){ top=169 }
					//如果left<0 就让left=0
					if(left<0){ left=0 }
					//如果left>169 就让left=169
					if(left>169){ left=169 }
					$mask.css({top,left});
					//让lgDiv的背景图片的位置跟随top和left移动
					$lgDiv.css(
						"background-position",
						`-${676/338*left}px -${676/338*top}px`
					);
				});
				/*分页*/
				//按钮点击事件
				var pno=1;
				var pageSize=3;
				//动态生成页码数  1  2  3
				var html="";
				var length=Math.ceil(list.length/pageSize);
				for(var i=1;i<=length;i++){
					html+=`<a>${i}</a>`;
				}
				$("div.list>a:eq(0)").after(html);//将生成的html插入到第一个a元素后
				$("div.list>a:eq(1)").addClass("current");
				$("div.list").on("click","a",function(){
					var $a=$(this);//当前发生点击事件的a
					//先查找有没有class为current的a
					var $current=$("div.list>a").hasClass("current");
					if($current==true){//如果有
						//就查找到有此class的a,，并为其去掉
						$("div.list>a.current").removeClass("current");
					}
					//然后再为当前发生点击事件的a添加current的class
					//$a.addClass("current");
					//判断当前发生点击事件的a的内容
					//如果其内容为上一页且页码数pno大于1
					if($a.html()=="上一页"){
						if(pno>1){
							pno--;//就让页码数pno减1
							//查找所有a中下标等于pno的a;
							var $a_current=$("div.list>a")[pno];
							//$a_current.classList.add('current');
							//为其添加current的class
							$a_current.className="current";
						}else{
							pno=1;
							$("div.list>a:eq(1)").addClass("current");
						}
					}else if($a.html()=="下一页"){//如果其内容为下一页
						//且页码数pno小于列表长度除以页码大小的向上取整的值
						if(pno<Math.ceil(list.length/pageSize)){
							pno++;//就让页码数pno加1
							//查找所有a中下标等于pno的a;
							var $a_current=$("div.list>a")[pno];
							//为其添加current的class
							$a_current.className="current";
						}else{
							pno=Math.ceil(list.length/pageSize);
							var $a_current=$("div.list>a")[pno];
							$a_current.className="current";
						}
					}else{//否则
						pno=$a.html();//就让页码数等于当前a的内容  1  2  3
						//为当前发生点击事件的a添加current的class
						$a.addClass("current");
					}
					//当发生点击事件时要发生ajax请求
					$.ajax({
						url:"http://127.0.0.1:3000/details/getMore?did="+did+"&pno="+pno,
						type:"get",
						dataType:"json",
						success:function(result){//result为服务器端查询分页返回的值
							//将列表信息动态显示
							var html="";
							for(var item of result){
								html+=`
									<li>
										<div class="img">
											<a target="_blank" href="javascript:;">
												<img src=${item.img} >
											</a>
											<div class="flager"></div>
										</div>
										<div class="info">
											<h3>
												<a target="_blank" href="javascript">${item.lname}</a>
											</h3>
											<p>规格：${item.guige}</p>
											<p>剂型：${item.dosage}</p>
											<p>库存：
												<label class="sreserve">979</label>
												瓶
											</p>
											<p>最近浏览：2次</p>
										</div>
										<div class="sale">
											<a href="javascript:;">
												<span class="hide_price">登录后查看价格</span>	
											</a>
											<p>${item.location}</p>
											<p class="dwp">
												<i class="icons dw"></i>
												<label>距离您 约1613.7公里</label>
												<label class="tip tipa">
													<i class="icons"></i>
													吉林省吉林市船营区望云山景小区3号楼1号网点
												</label>
											</p>
										</div>
										<div class="shop">
											<p>
												<a target="_blank" class="stitle" href="javascript:;">${item.cName}</a>
											</p>
										</div>
										<div class="spec">
											<a class="btn7 f1" href="javascript:;">查看详情</a>
										</div>
									</li>
								`;
							}
							$("ul.slist").html(html);
						}
					});
				})
				//发生点击事件前也要发送分页请求
				$.ajax({
					url:"http://127.0.0.1:3000/details/getMore?did="+did+"&pno="+pno,
					type:"get",
					dataType:"json",
					success:function(result){
						//将列表信息动态显示
						var html="";
						for(var item of result){
							html+=`
								<li>
									<div class="img">
										<a target="_blank" href="javascript:;">
											<img src=${item.img} >
										</a>
										<div class="flager"></div>
									</div>
									<div class="info">
										<h3>
											<a target="_blank" href="javascript">${item.lname}</a>
										</h3>
										<p>规格：${item.guige}</p>
										<p>剂型：${item.dosage}</p>
										<p>库存：
											<label class="sreserve">979</label>
											瓶
										</p>
										<p>最近浏览：2次</p>
									</div>
									<div class="sale">
										<a href="javascript:;">
											<span class="hide_price">登录后查看价格</span>	
										</a>
										<p>${item.location}</p>
										<p class="dwp">
											<i class="icons dw"></i>
											<label>距离您 约1613.7公里</label>
											<label class="tip tipa">
												<i class="icons"></i>
												吉林省吉林市船营区望云山景小区3号楼1号网点
											</label>
										</p>
									</div>
									<div class="shop">
										<p>
											<a target="_blank" class="stitle" href="javascript:;">${item.cName}</a>
										</p>
									</div>
									<div class="spec">
										<a class="btn7 f1" href="javascript:;">查看详情</a>
									</div>
								</li>
							`;
						}
						$("ul.slist").html(html);
					}
				});
			}
		});
	}
})
