<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!--�ٶ�iocnͼ��-->
        <link rel="shortcut icon" href="https://www.baidu.com/favicon.ico" type="image/x-icon"/>
        <title>�ٶ�һ��,���֪��</title>
        <style type="text/css">
            body{/*���������Դ���ʽ*/
                margin: 0;
                padding: 0;
            }
            .box{/*���ĺ���*/
                width: 100%;
                /*background: yellow;*/
                height: 636px;
                background-image:url("https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin/880.jpg?2");
                background-size: 100%;
                
            }
            .box_log{/*log����*/
                width: 100%;
            }
            
            .box_log img{/*�ٶ�log*/
                width: 19.8%;
                margin-left: 49.4%;
                transform: translate(-50%);
                margin-top: 38px;
                margin-bottom: 19px;
            }
            .box_text{/*text��������Ӵ�С*/
                width: 100%;
                height: 36px;
            }
            .log_img{/*input���е�С���*/
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
//                <img src="../img/QQͼƬ20180119115441.png" class="log_img"/>
                <input type="text" name="text" id="text" value=""/>
                <input type="button" name="bdyx" id="btn" value="�ٶ�һ��" />
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
            var otext = document.getElementById("text");  //��ȡinput��
            ose = document.querySelector("#search");  //ͨ������ѡ���� ѡ��search��
            lis = document.getElementsByClassName("li1");  //��ȡ���е�li
            otext.onkeyup = function(){   //����input���м��̵������¼�
                ose.style.display = otext.value?"block":"none";  /*��Ŀ�����,���otext.value��ֵ��λ��,��block��*/
                var osc = document.createElement("script");  /*����һ��script��ǩ*/
                osc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+otext.value+"&cb=houxiaowei";
                /*srcipt��srcֵ����ٶȵ�url,Ȼ��otext�ı�����������������ӵ�url,�ں����������Լ��ķ���*/
                document.body.appendChild(osc);
                /*�������õ�script��ǩԪ�ط���body��*/
                
                
                /*input���а��»س�����input��ֵ��תҳ��*/
                if(event.keyCode==13){
                    /*���ٶ���Ϊ����,����input��ֵ,�������µ�ҳ��*/
                    window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext.value
                }
            }
            
            var count = 0;
            var search = 0;
            var arr = ose.children; /*��ȡose�µ�����li*/
            function houxiaowei(json){
                var jsonLength = 0;  /*json���ȵĳ�ʼֵ*/
//                    console.log(json.s);  ��ӡjson�����е���������
                for(var x in json.s){   /*��ѭ���Ĵ������json�ĳ���*/
                    jsonLength++;����������
                }
//                    console.log(jsonLength);  ��ӡjson���ݵĳ���
                for(var i=0;i<lis.length;i++){
                    if(jsonLength==0){  /*����������ĳ��ȵ���0,li��ֵΪ��*/
                        arr[i].innerHTML = null;   
                    }else{
                        if(json.s[i]!=null){/*���json[i]��ֵ�����ڿ�,������ֵ����li��*/
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
            
            /*����li�е�ֵ��ʾ��input����*/
            function iptShow(thisId){
                otext.value = arr[thisId].innerHTML;
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext.value
            }
            /*����body�е�����ط�����li*/
            document.body.onclick = function(){
                ose.style.display = "none";
            }
        
            /*�����ٶ�btn��ʱ�򴥷�,�������µ�����*/
            var btn = document.querySelector("#btn");
            btn.onclick = function(){
                /*��ȡ��ǰinput��ֵ*/
                var otext = document.getElementById("text").value;
                /*���ٶ���Ϊ����,����input��ֵ,�������µ�ҳ��*/
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext
            }  
        </script>
    </body>
</html>
