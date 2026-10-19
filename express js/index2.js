import express from "express";

const app = express();

app.get("/",(req,resp)=>{

    const user = ["narendra","karan","rohit","devansh","kartik"];
    let data = `<ul>`;
    for(let i=0;i<user.length;i++){
        console.log(user[i]);
        data += `<li><a href = "user/${user[i]}" >${user[i]}</a</li>`;

    }
    data += `</ul>`
    resp.send(data);

});

app.get("/user/:name",(req,resp)=>{
    let userUrl = req.params.name
    resp.send(`this is ${userUrl}'s profile `);
})

app.listen(3434);