const http = require("http");
const fs = require("fs");

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type":"text/html"});
//     if(req.url=="/"){
//         resp.write(`
//         <form action = "/submit" method ="post">
//         <input name = "name" placeholder="enter your name" >
//         <input name = "email" placeholder="enter your email" >
//         <button>Submit</button>
//         </form>
//         `);
//     }
//     else if(req.url=="/submit"){
//         resp.write("<h1>Form Submitted</h1>");
//         resp.end();
//     }
    

//     console.log(req.url);
//     resp.end();

// }).listen(4343);

http.createServer((req,resp)=>{
    fs.readFile("html/form.html","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(500,{"content-type":"text/plain"});
            resp.write("some error");
            resp.end();
        }
        else if(req.url=="/"){
            resp.writeHead(500,{"content-type":"text/html"});
            resp.write(data);
            resp.end();
        }
        else if(req.url=="/submit"){
            resp.writeHead(200,{"content-type":"text/html"});
            resp.write("<h2>DATA SUBMITTED</h2>");
            resp.end();
        }
    });
}).listen(4343);