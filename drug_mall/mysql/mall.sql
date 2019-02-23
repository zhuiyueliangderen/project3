#设置客户端连接服务器编码
SET NAMES UTF8;
#丢弃数据库(如果存在的话)mall
DROP DATABASE IF EXISTS mall;
#创建数据库mall
CREATE DATABASE mall CHARSET=UTF8;
#进入数据库
USE mall;
#创建注册表user
CREATE TABLE user(
     uid TINYINT PRIMARY KEY AUTO_INCREMENT,
     uname VARCHAR(32),
     upwd VARCHAR(12),
     phone VARCHAR(11)
);
INSERT INTO user VALUES
("null","dingding","123456",13123456789),
("null","dangdang","123456",15123456789),
("null","dongdong","123456",18123456789),
("null","pingping","123456",15823456789),
("null","pangpang","123456",15923456789),
("null","tongtong","123456",15023456789),
("null","tingting","123456",13923456789);
#创建药品详情表drug_detail
CREATE TABLE drug_details(
    did TINYINT PRIMARY KEY AUTO_INCREMENT,
    dname VARCHAR(32),
    brand VARCHAR(32),
    dosage VARCHAR(16),
    company VARCHAR(32)
);
INSERT INTO drug_details VALUES
("null","健胃消食片","江中","薄膜衣片剂(含糖型)","江中药业股份有限公司"),
("null","双氯芬酸二乙胺乳胶剂","扶他林","乳胶剂","北京诺华制药有限公司"),
("null","清喉利咽颗粒","慢严舒柠","颗粒剂(含糖型)","桂龙药业(安徽)有限公司"),
("null","板蓝根颗粒","999","颗粒剂(含蔗糖)","华润三九(枣庄)药业有限公司"),
("null","护肝片","葵花","糖衣片剂","黑龙江葵花药业股份有限公司"),
("null","铝碳酸镁片","达喜","片剂","拜耳医药保健有限公司"),
("null","大山楂丸","同仁堂","大蜜丸剂","北京同仁堂股份有限公司同仁堂制药厂"),
("null","三九胃泰颗粒","999","颗粒剂","华润三九医药股份有限公司"),
("null","高钙片","新盖中盖","片剂","哈药集团制药六厂"),
("null","奥拉西坦胶囊","欧来宁","硬胶囊剂","石药集团欧意药业有限公司"),
("null","苯磺酸氨氯地平片","络活喜","片剂","辉瑞制药有限公司"),
("null","奥氮平片","欧兰宁","薄膜衣片剂","江苏豪森药业集团有限公司"),
("null","二十五味珊瑚丸","金珠雅砻","水丸剂(0.25g)","西藏金珠雅砻藏药有限责任公司"),
("null","三七通舒胶囊","null","胶囊剂","成都泰合健康科技集团股份有限公司华神制药厂"),
("null","降糖舒胶囊","天泰","胶囊剂","吉林省天泰药业股份有限公司"),
("null","护肝宁片","摩美得","糖衣片剂","陕西摩得美制药有限公司"),
("null","糖衣片剂","同仁堂","大蜜丸剂","北京同仁堂股份有限公司同仁堂制药厂"),
("null","五子衍宗丸","null","水蜜丸剂","杭州胡庆余堂药业有限公司"),
("null","六味地黄丸","同仁堂","水蜜丸剂","北京同仁堂科技发展股份有限公司制药厂"),
("null","巴戟胶囊","伍舒芳","硬胶囊剂","重庆希尔安药业有限公司"),
("null","益肾乌发口服液","同仁堂","合剂","北京同仁堂科技发展股份有限公司制药厂"),
("null","男宝胶囊","null","胶囊剂","天津力生制药股份有限公司"),
("null","鹿角胶","辅仁","胶剂(铁盒)","河南辅仁堂制药有限公司"),
("null","米诺地尔酊","蔓迪","酊剂","浙江万晟药业有限公司"),
("null","叶酸片","斯利安","片剂","北京斯利安药业有限公司"),
("null","妇科千金片","千金","薄膜衣片剂","株洲千金药业股份有限公司");
#创建药品图片表drug_pics
CREATE TABLE drug_pics(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pics_id INT,
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHAR(128)
);
INSERT INTO drug_pics VALUES
(null,3,"images/product_images/sm/qinghouliyan120x120_1.jpg","images/product_images/md/qinghouliyan338x338_1.jpg","images/product_images/lg/qinghouliyan676x676_1.jpg"),
(null,3,"images/product_images/sm/qinghouliyan120x120_2.jpg","images/product_images/md/qinghouliyan338x338_2.jpg","images/product_images/lg/qinghouliyan676x676_2.jpg"),
(null,3,"images/product_images/sm/qinghouliyan120x120_3.jpg","images/product_images/md/qinghouliyan338x338_3.jpg","images/product_images/lg/qinghouliyan676x676_3.jpg"),
(null,3,"images/product_images/sm/qinghouliyan120x120_4.jpg","images/product_images/md/qinghouliyan338x338_4.jpg","images/product_images/lg/qinghouliyan676x676_4.jpg"),
(null,3,"images/product_images/sm/qinghouliyan120x120_5.jpg","images/product_images/md/qinghouliyan338x338_5.jpg","images/product_images/lg/qinghouliyan676x676_5.jpg"),
(null,3,"images/product_images/sm/qinghouliyan120x120_6.jpg","images/product_images/md/qinghouliyan338x338_6.jpg","images/product_images/lg/qinghouliyan676x676_6.jpg"),
(null,3,"images/product_images/sm/qinghouliyan120x120_7.jpg","images/product_images/md/qinghouliyan338x338_7.jpg","images/product_images/lg/qinghouliyan676x676_7.jpg");
INSERT INTO drug_pics VALUES
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_1.jpg","images/product_images/md/jianweixiaoshipian338x338_1.jpg","images/product_images/lg/jianweixiaoshipian676x676_1.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_2.jpg","images/product_images/md/jianweixiaoshipian338x338_2.jpg","images/product_images/lg/jianweixiaoshipian676x676_2.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_3.jpg","images/product_images/md/jianweixiaoshipian338x338_3.jpg","images/product_images/lg/jianweixiaoshipian676x676_3.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_4.jpg","images/product_images/md/jianweixiaoshipian338x338_4.jpg","images/product_images/lg/jianweixiaoshipian676x676_4.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_5.jpg","images/product_images/md/jianweixiaoshipian338x338_5.jpg","images/product_images/lg/jianweixiaoshipian676x676_5.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_6.jpg","images/product_images/md/jianweixiaoshipian338x338_6.jpg","images/product_images/lg/jianweixiaoshipian676x676_6.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_7.jpg","images/product_images/md/jianweixiaoshipian338x338_7.jpg","images/product_images/lg/jianweixiaoshipian676x676_7.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_8.jpg","images/product_images/md/jianweixiaoshipian338x338_8.jpg","images/product_images/lg/jianweixiaoshipian676x676_8.jpg"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_9.jpg","images/product_images/md/jianweixiaoshipian338x338_9.jpg","images/product_images/lg/jianweixiaoshipian676x676_9.jpg");
INSERT INTO drug_pics VALUES
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_1.jpg","images/product_images/md/jianweixiaoshipian338x338_1.jpg","images/product_images/lg/jianweixiaoshipian676x676_1.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_2.jpg","images/product_images/md/jianweixiaoshipian338x338_2.jpg","images/product_images/lg/jianweixiaoshipian676x676_2.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_3.jpg","images/product_images/md/jianweixiaoshipian338x338_3.jpg","images/product_images/lg/jianweixiaoshipian676x676_3.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_4.jpg","images/product_images/md/jianweixiaoshipian338x338_4.jpg","images/product_images/lg/jianweixiaoshipian676x676_4.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_5.jpg","images/product_images/md/jianweixiaoshipian338x338_5.jpg","images/product_images/lg/jianweixiaoshipian676x676_5.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_6.jpg","images/product_images/md/jianweixiaoshipian338x338_6.jpg","images/product_images/lg/jianweixiaoshipian676x676_6.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_7.jpg","images/product_images/md/jianweixiaoshipian338x338_7.jpg","images/product_images/lg/jianweixiaoshipian676x676_7.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_8.jpg","images/product_images/md/jianweixiaoshipian338x338_8.jpg","images/product_images/lg/jianweixiaoshipian676x676_8.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_9.jpg","images/product_images/md/jianweixiaoshipian338x338_9.jpg","images/product_images/lg/jianweixiaoshipian676x676_9.jpg"),
(null,2,"images/product_images/sm/jianweixiaoshipian120x120_10.jpg","images/product_images/md/jianweixiaoshipian338x338_10.jpg","images/product_images/lg/jianweixiaoshipian676x676_10.jpg");

#创建商品列表drug_list
CREATE TABLE drug_list(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    list_id INT,
    img VARCHAR(128),
    lname VARCHAR(128),
    guige VARCHAR(128),
    dosage VARCHAR(128),
    location VARCHAR(128),
    cName VARCHAR(128)
);
INSERT INTO drug_list VALUES
(null,3,"images/product_images/sm/qinghouliyan120x120_1.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房"),
(null,3,"images/product_images/sm/qinghouliyan120x120_2.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房"),
(null,3,"images/product_images/sm/qinghouliyan120x120_3.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房"),
(null,3,"images/product_images/sm/qinghouliyan120x120_4.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房"),
(null,3,"images/product_images/sm/qinghouliyan120x120_5.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房"),
(null,3,"images/product_images/sm/qinghouliyan120x120_6.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房"),
(null,3,"images/product_images/sm/qinghouliyan120x120_7.jpg","清喉利咽颗粒","5g×6袋/盒","颗粒剂(含糖型)","浙江 杭州市","北京同仁堂大药房");
INSERT INTO drug_list VALUES
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_1.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_2.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_3.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_4.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_5.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_6.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_7.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_8.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房"),
(null,1,"images/product_images/sm/jianweixiaoshipian120x120_9.jpg","健胃消食片","0.8g×8片×4板/盒","薄膜衣片剂(含糖型)","江苏 南京市","北京同仁堂大药房");
INSERT INTO drug_list VALUES
(null,2,"images/product_images/sm/futalin120x120_1.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_2.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_3.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_4.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_5.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_6.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_7.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_8.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_9.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房"),
(null,2,"images/product_images/sm/futalin120x120_10.jpg","双氯芬酸二乙胺乳胶剂","0.8g×8片×4板/盒","乳胶剂","江苏 南京市","北京同仁堂大药房");


