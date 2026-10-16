import express from "express";

const app = express();

function checkAge(req,resp,next){
    if(!req.query.age || req.query.age<18){
        resp.send("you can not access this page");

    }
    else{
        next();
    }
}

app.use(checkAge);

app.get("/",(req,resp)=>{
    resp.send("<h1>this is home page</h1>");
})

app.get("/login",(req,resp)=>{
    resp.send("<h1>this is login page</h1>");
})

app.get("/about",(req,resp)=>{
    resp.send("<h1>this is about page</h1>");
})

app.listen(3400);