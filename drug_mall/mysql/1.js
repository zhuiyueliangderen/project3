<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!--百度iocn图标-->
        <link rel="shortcut icon" href="https://www.baidu.com/favicon.ico" type="image/x-icon"/>
        <title>百度一下,你就知道</title>
        <style type="text/css">
            body{/*清除浏览器自带样式*/
                margin: 0;
                padding: 0;
            }
            .box{/*最大的盒子*/
                width: 100%;
                /*background: yellow;*/
                height: 636px;
                background-image:url("https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin/880.jpg?2");
                background-size: 100%;
                
            }
            .box_log{/*log盒子*/
                width: 100%;
            }
            
            .box_log img{/*百度log*/
                width: 19.8%;
                margin-left: 49.4%;
                transform: translate(-50%);
                margin-top: 38px;
                margin-bottom: 19px;
            }
            .box_text{/*text搜索框盒子大小*/
                width: 100%;
                height: 36px;
            }
            .log_img{/*input框中的小相机*/
                position: absolute;
                left: 865px;
                top: 202px;
            }
            #text{
                width: 540px;
                height: 36px;
                box-sizing: border-box;
                margin-left: 355px;
                margin-top: 3px;
                text-indent: 4px;
            }
            #btn{
                width: 100px;
                height: 36px;
                background: #3385FF;
                border: 0px;
                letter-spacing: 1px;
                color: white;
                margin-left: -5px;
                font-size: 15px;
                box-sizing: border-box;
                transform: translateY(2px);
                box-sizing: border-box;
            }
            #btn:hover{
                cursor: pointer;
            }
            #search{
                width: 540px;
                /*background: yellow;*/
                margin: 0;
                padding: 0;
                margin-left: 355px;
                list-style: none;
                display: none;
                border: 1px solid #E3E5E4; 
            }
            #search li{
                line-height: 36px;
                background: white;
            }
            #search li:hover{
                background: #F0F0F0;
            }
            .li1{
                text-indent: 4px;
            }
        </style>
    </head>
    <body>
        <div class="box">
            <div class="box_log">
//                <img src="../img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png"/>
            </div>
            <div class="box_text">
//                <img src="../img/QQ图片20180119115441.png" class="log_img"/>
                <input type="text" name="text" id="text" value=""/>
                <input type="button" name="bdyx" id="btn" value="百度一下" />
                <ul id="search">
                    <li class="li1" id="0" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="1" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="2" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="3" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="4" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="5" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="6" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="7" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="8" onclick="iptShow(this.id)"></li>
                    <li class="li1" id="9" onclick="iptShow(this.id)"></li>
                </ul>
            </div>
        </div>
        
        
        <script>
            var otext = document.getElementById("text");  //获取input框
            ose = document.querySelector("#search");  //通过类名选择器 选择到search框
            lis = document.getElementsByClassName("li1");  //获取所有的li
            otext.onkeyup = function(){   //当在input框中键盘弹起发生事件
                ose.style.display = otext.value?"block":"none";  /*三目运算符,如果otext.value的值部位空,则block。*/
                var osc = document.createElement("script");  /*创建一个script标签*/
                osc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+otext.value+"&cb=houxiaowei";
                /*srcipt的src值引入百度的url,然后将otext文本框中输入的内容连接到url,在后面在运行自己的方法*/
                document.body.appendChild(osc);
                /*将创建好的script标签元素放入body中*/
                
                
                /*input框中按下回车根据input的值跳转页面*/
                if(event.keyCode==13){
                    /*将百度作为连接,传入input的值,并跳入新的页面*/
                    window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext.value
                }
            }
            
            var count = 0;
            var search = 0;
            var arr = ose.children; /*获取ose下的所有li*/
            function houxiaowei(json){
                var jsonLength = 0;  /*json长度的初始值*/
//                    console.log(json.s);  打印json数据中的所有数据
                for(var x in json.s){   /*将循环的次数变成json的长度*/
                    jsonLength++;　　　　　
                }
//                    console.log(jsonLength);  打印json数据的长度
                for(var i=0;i<lis.length;i++){
                    if(jsonLength==0){  /*如果遍历出的长度等于0,li的值为空*/
                        arr[i].innerHTML = null;   
                    }else{
                        if(json.s[i]!=null){/*如果json[i]的值不等于空,则将它的值放入li中*/
                            arr[i].innerHTML = json.s[i];
                        }
                    }
                }
                if(count==lis.length-1){
                    count=0;
                    search=0;
                }
                count++;
                search++;
            }
            
            /*单击li中的值显示在input框中*/
            function iptShow(thisId){
                otext.value = arr[thisId].innerHTML;
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext.value
            }
            /*单击body中的任意地方隐藏li*/
            document.body.onclick = function(){
                ose.style.display = "none";
            }
        
            /*单击百度btn的时候触发,并跳到新的连接*/
            var btn = document.querySelector("#btn");
            btn.onclick = function(){
                /*获取当前input的值*/
                var otext = document.getElementById("text").value;
                /*将百度作为连接,传入input的值,并跳入新的页面*/
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext
            }  
        </script>
    </body>
</html>

