import express from 'express'
import path from 'path'

const app = express();

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
