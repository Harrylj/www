/**
 * Created by Administrator on 2017-1-20.
 */
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello,world\n');
}).listen(8887);
console.log('server runnig at http://127.0.0.1:8887/');