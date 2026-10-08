const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
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
            resp.writeHead(200,{"content-type":"text/html"});
            resp.write(data);
            resp.end();
        }
        else if(req.url=="/submit"){
            resp.writeHead(200,{"content-type":"text/html"});
            
            let dataBody = [];
            req.on("data",(chunk)=>{
                dataBody.push(chunk);
                
            })
            req.on("end",()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);
                resp.write(`<h1>${readableData.name}</h1>`);
                let dataString = "my name is "+readableData.name + " and my email is " + readableData.email;
                console.log(dataString);
                // fs.writeFileSync("text/"+readableData.name+".txt",dataString);
                // console.log("file created");

                fs.writeFile("text/"+readableData.name+".txt",dataString,"utf-8",(err)=>{
                    if(err){
                        resp.end("some error");

                    }
                    else{
                        console.log("file created");
                    }
                })
                resp.end();
            });
            
            
        }
    });
}).listen(4343);