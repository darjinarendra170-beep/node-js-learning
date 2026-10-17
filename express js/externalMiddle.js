import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan('dev'));
app.get("/",(req,resp)=>{
    resp.send("hlo word");
});



app.get("/login",(req,resp)=>{
    resp.send("hlo login");
});

app.get("/user",(req,resp)=>{
    resp.send("hlo user");
});


app.get("/wait",(req,resp)=>{
    setTimeout(() => {
        resp.send("got it");
    }, 1000);
});

app.listen(3400);
