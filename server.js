const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>this is narendra darji</h1>");
    resp.end("hello friends how are you");
}).listen(3423);


http.createServer((req,resp)=>{
    resp.write("<h1>this is narendra darji and other server</h1>");
    resp.end("hello friends how are you");
}).listen(3424);

