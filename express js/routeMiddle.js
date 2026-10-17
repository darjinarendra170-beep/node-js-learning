import express from "express";

const app = express();
function routeMiddleware(req,resp,next){
    console.log(req.query.age)
    if(!req.query.age || req.query.age<18){
        resp.send("you are not eligible");
    }
    else{
        next();
    }
}
function routeURLMiddleware(req,resp,next){
    console.log(req.url);
    next();
    
}



app.get("/",(req,resp)=>{
    resp.send("<h1>THis is home page</h1>");
});

app.get("/login",routeMiddleware,routeURLMiddleware,(req,resp)=>{
    resp.send("<h1>THis is login page</h1>");
});

app.get("/user",(req,resp)=>{
    resp.send("<h1>THis is user page</h1>");
});

app.get("/product",routeMiddleware,(req,resp)=>{
    resp.send("<h1>THis is product page</h1>");
});

app.listen(3400);