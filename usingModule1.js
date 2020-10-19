var h=require('http');
var mym=require('./nodeModule1.js');

var server=h.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
console.log("23 is Prime Number "+mym.isPrime(23));
console.log("Factorial of 4 Is " +mym.calFact(4));
console.log("28 is Perfect Number "+mym.isPerfect(28));
res.end();
});
server.listen(8100);
console.log("Server started on port 8100");







