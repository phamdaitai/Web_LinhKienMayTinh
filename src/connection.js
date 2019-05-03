import React, { Component } from 'react';
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_ban_hang"
});

app.use(bodyparser.json());

/*connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user(user_name, user_pass, user_mail, user_phone, user_andress) VALUES ('DaiTai', 'phampham', 'daipham@gmail.com', '0888888888', 'Nghe An')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Đã thêm dữ liệu");
  });
  // console.log("Du lieu nguoi dung");
  // var pushData = "SELECT * FROM user";
  // connection.query(pushData, function (err, result) {
  //   if (err) throw err;
  //   console.log("Dữ liệu đã được lấy ra");
  // });
  //  //pushData.send("./src/Components/UserList", {data: pushData});
});*/


app.listen(3000, () => console.log('express server is running in localhost 3000'));

//Lấy  dữ liệu tất cả người dùng

var result = [];// t khởi tạo một cái mảng result ở đây nhé

app.get('/user', (req, res) => {
  //res.send("hello");
  connection.query('SELECT * FROM user', [req.params.id], (err, rows, fields) => {
    if (!err) {
      result = rows.map(function (x) {
        return x; // xong lấy giá trị trả về ở đây từ DB
      })
      res.json(result);
      console.log(result);// Nếu console.log ở đây thì nó đc

    }
    else
      console.log(err);
  });
});



//console.log(result); // Nhưng nếu log ở đây thì k đc. Lỗi thì tìm ra nguyên nhân
//đó là do k đồng bộ, nghĩa là khi res chưa kịp trả về thì đã log result ở bên ngoài trc 
//rồi nên nó sẽ bị rỗng/ nhưng mà k biết cách xử lý

//lấy dữ liệu một người dùng
/*app.get('/user/:id',(req,res)=>{
  connection.query('SELECT * FROM user WHERE user_id=?',[req.params.id], (err, rows, fields)=>{
    if(!err){
      console.log(rows);
    }
    else
      console.log(err);
  })
});*/

//Xóa dữ liệu
/*app.delete('/user/:id',(req,res)=>{
  connection.query('DELETE FROM user WHERE user_id=?',[req.params.id], (err, rows, fields)=>{
    if(!err){
      res.send('Delete successed');
    }
    else
      console.log(err);
  })
});*/

result = [{"user_id":1,"user_name":"Tai","user_pass":"taipham","user_mail":"tai@gmail.com","user_phone":"0999999999","user_andress":"Ha Noi"},
{"user_id":2,"user_name":"Dai","user_pass":"phampham","user_mail":"dai@gmail.com","user_phone":"0888888888","user_andress":"Nghe An"},
{"user_id":3,"user_name":"DaiTai","user_pass":"phampham","user_mail":"daipham@gmail.com","user_phone":"0888888888","user_andress":"Nghe An"}];

module.exports = result;