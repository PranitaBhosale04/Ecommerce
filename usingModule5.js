var http = require('http');
var visit_cnt=0.5;

var server = http.createServer(function(req,res){
	visit_cnt=visit_cnt+0.5;
	res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Visit Count : '+visit_cnt+'<h1>');
	res.end();
});
server.listen(8300);
console.log("server started on port 8300");

