var h=require('http');
var mym=require('./nodeModule2.js');

var server=h.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<h1> Hello from Node JS </h1>");
console.log(mym.msg);
res.end();
});
server.listen(9000);
console.log("Server started on port 9000");

