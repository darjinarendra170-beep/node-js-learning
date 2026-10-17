import express, { urlencoded } from "express";

const app = express();



app.get("/",(req,resp)=>{
    resp.send("<h1>This is Home page </h1>");

});

app.get("/login",(req,resp)=>{
    resp.send(`
        <form action = "/submit" method = "post">
        <input placeholder = "enter name" name = "name" type = "text" />
        <input placeholder = "enter email" name = "email" type = "text" />
        <button>submit</button>
        </form>
        `);

});

app.use(urlencoded({extended:false}));

app.post("/submit",(req,resp)=>{
    console.log(req.body);
    resp.send("<h1>This is submit page </h1>");

});

app.listen(3200);

