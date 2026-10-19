import express from "express";

const app = express();
app.set("view engine","ejs");



app.get("/",(req,resp)=>{
    resp.render("home",{name:"narendra" , age:20});
});

app.listen(3400);