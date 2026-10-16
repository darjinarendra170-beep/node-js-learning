import express from "express";

const app = express();

function checkRoute(req,resp,next){
    console.log(req.url);
    next();
}

app.use(checkRoute);

app.get("/",(req,resp)=>{
    resp.send("Home page");

})

app.get("/products",(req,resp)=>{
    resp.send("product page");
    
})


app.get("/users",(req,resp)=>{
    resp.send("user page");
    
})

app.listen(3400)