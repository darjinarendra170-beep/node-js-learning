const http = require("http");
const fs = require("fs");

let collectData;

fs.readFile("html/header.html","utf-8",(error,data)=>{
  if(error){
    resp.end("this is normal error");

  }
  collectData = data;
  
})





http
  .createServer((req, resp) => {
    
    let file = req.url;
    if(file == "/"){
      file = "/home";
    }
    console.log(file);
    if (req.url != "/check.css") {
      fs.readFile("html"+file+".html", "utf-8", (error, data) => {
        if (error) {
          resp.end("some internal error");
        } else {
          resp.writeHead(200, { "Content-type": "text/html" });
          resp.write(collectData+data);
          
          resp.end();
          
        }
      });
    }
    else if(req.url=="/check.css"){
        fs.readFile("html/check.css","utf-8",(error,data)=>{
            if(error){
                resp.writeHead(500,{"content-type":"text/plain"});
                resp.end("css error");
            }
            else{
                resp.writeHead(200,{"content-type":"text/css"});
                resp.write(data);
                
                resp.end();
            }
        })
    }
    else{
        
        resp.end("error");
    }
  })
  .listen(9898);
