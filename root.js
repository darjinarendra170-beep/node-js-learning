const http = require("http");
const userData = require("./userDataSubmit");
const userForm = require("./userForm");
const queryString = require("querystring");
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"});
    if(req.url=="/"){
        userForm(req,resp);
        resp.end();
    }
    else if(req.url=="/submit"){
        userData(req,resp);
        
        resp.end();
    }
}).listen(3425);
