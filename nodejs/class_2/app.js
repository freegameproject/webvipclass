var http     = require('http');
var path     = require('path');
var express  = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res){
  res.send('hello');
});
app.get('/about', function(req, res){
  res.send('关于我们');
});
app.get('/download', function(req, res){
  res.send('欢迎下载');
});
http.createServer(app).listen(3000, function(){
    console.log("Express server listening on port " + 3000);
}
