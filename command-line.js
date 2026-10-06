const arg = process.argv;
const http = require("http");
const mylisten = arg[2];
http.createServer((req,resp)=>{
    resp.write("narendra darji");
    resp.end();
}).listen(mylisten);

