import express from 'express'
import path from 'path'

const app = express();

const publicPath = path.resolve("public");
console.log(publicPath);

app.use(express.static(publicPath));

app.get("/",(req,resp)=>{
    const absPath = path.resolve("view/home.html");
    
    resp.sendFile(absPath);
});

app.get("/login",(req,resp)=>{
    const absPath = path.resolve("view/login.html");
    resp.sendFile(absPath);
});

app.post("/submit",(req,resp)=>{
    const absPath = path.resolve("view/submit.html");
    resp.sendFile(absPath);

});

app.use((req,resp)=>{
    const absPath = path.resolve("view/404.html");
    resp.status(404).sendFile(absPath);
    
});


app.listen(3200);
