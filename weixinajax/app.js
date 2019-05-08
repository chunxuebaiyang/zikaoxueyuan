//day05/src/app.js
//         /node_modules/
//         /public/index.html
//1:引入三个模块
//   express/multer/fs
const fs = require("fs");
const express = require("express");
const multer = require("multer");
//2:创建express对象
var server = express();
server.listen(3030);
console.log(3030)
//3:指定静态目录 public
server.use(express.static("public"));
server.use(express.static("upload"));
//4:创建upload对象
var upload = multer({dest:"upload/"});
//5:接收客户post请求
server.post("/uploadFile",upload.single("mypic"),(req,res)=>{
 // 5.7:获取原文件名  1.jpg
 var src = req.file.originalname;

 // 5.8:创建新文件名
 // var des = 时间戳+随机数+.jpg
 var ft = new Date().getTime();
 var tn = Math.floor(Math.random()*9999);
 var i3 = src.lastIndexOf(".");//查找后缀.下标
 var suff= src.substring(i3);  //i3位置开始截取
 var des = __dirname+"/upload/"+ft+tn+suff;

 // 5.9:将临时文件移动到 upload目录下
 fs.renameSync(req.file.path,des);
 res.send({code:1,msg:"上传成功"});
}) 
