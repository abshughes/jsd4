//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end('Hello World\n');
//}).listen(8124, "127.0.0.1");
//console.log('Server running at http://127.0.0.1:8124/');

var express=require('express');
var app=express();
var router=express.Router;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');
// app.set('views',__dirname + '/views'));

// //routes
// router.get('/', function(req, res) {
// 	res.render('home');
// // };
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views')

// routes
// router.get('/', function(req, res) {
//     res.render('home');
// });

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//console.log(router);

