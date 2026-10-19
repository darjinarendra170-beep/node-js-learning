import express, { urlencoded } from "express";

const app = express();
app.set("view engine", "ejs");

app.get("/user",(req,resp)=>{
    resp.render("user");
});

app.use(urlencoded({extended:false}));

app.post("/submit",(req,resp)=>{
    console.log(req.body);
    resp.render("submit",req.body);
})



app.get("/list",(req,resp)=>{
    const listname = ["narendra","karan","lalu","rohit","subhas"];
    resp.render("list",{names:listname, islogin:false});
})

app.listen(3200);