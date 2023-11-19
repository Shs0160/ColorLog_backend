//index.js
const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
const app = express() //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다.
const port = 8080 
const path = require('path');

var http = require('http');
var fs = require('fs');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  // 기본 경로로 접속했을 때 main.html을 읽어서 전송
  res.sendFile(__dirname + '/ColorLog.html');
});

//app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면, 
//  res.send('Hello World!') //"Hello World!" 를 출력되게 해준다.
//})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 8080번에서 앱을 실행



