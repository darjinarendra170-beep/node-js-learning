const http = require("http");
const age = 45;
const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-type","text/html")
    resp.write(`
        <html>
        <head>
        <title>tutorial</title>
        </head>
        <body>
        <h1>`+new Date+`</h1>
        
        </body>
        </html>

        
        `);
    resp.end("okay met");
    
});

server.listen(4700);