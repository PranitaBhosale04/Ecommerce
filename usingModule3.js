var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function(req, res){
	var url_parts=url.parse(req.url,true);
	var color=url_parts.query.color;
	var msg=url_parts.query.msg;
	var path=url_parts.pathname;
		res.writeHead(200,{'Content-Type':'text/html'});
		//res.write(data,toString());
		res.end();
});

server.listen(9100);
console.log("Server started on port 9100")