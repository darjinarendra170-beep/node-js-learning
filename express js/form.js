import express from 'express';
import home from './pages1/home.js';
import login from './pages1/login.js';
import submit from './pages1/submit.js';
const app = express();

app.get("/",(req,resp)=>{
    resp.send(home());

});

app.get("/login",(req,resp)=>{
    resp.send(login());

});

app.post("/submit",(req,resp)=>{
    resp.send(submit());

});

app.listen(3100);


