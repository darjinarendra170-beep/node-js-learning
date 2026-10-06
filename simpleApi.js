const http = require('http');

const userData = [
    {
        name:"narendra",
        age:19,
        email:"narendra@gmail.com",
    },
    {
        name:"usha",
        age:24,
        email:"usha@gmail.com",
    },
    {
        name:"rohit",
        age:23,
        email:"rohit@gmail.com",
    }

]

http.createServer((req,resp)=>{
    resp.setHeader("Content-type","application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(3240)