const http = require("http");
const fs = require("fs");

http.createServer((req,resp)=>{
    fs.readFile("html/index.html","utf-8",(err,data)=>{
        if(err){
            resp.writeHead(500,{"Content-type":"text/plain"});
            resp.write("internal server error");
            resp.end();
            return;
        }
        resp.writeHead(200,{"Content-type":"text/html"});
        resp.write(data);
        resp.end();

    })
    
}).listen(3400);