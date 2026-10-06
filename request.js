const http = require('http');

http.createServer((req,resp)=>{
    if(req.url=="/"){
        resp.write("<h1>Home Page</h1>");
    }
    else if(req.url=="/login"){
        resp.write("<h1>This is Login Page</h1>");
    }
    else{
        resp.write("<h1>Other Page</h1>");
    }
    resp.end();
}).listen(6700);