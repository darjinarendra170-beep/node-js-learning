import express from 'express';
import userData from './user.json' with {type:"json"};
const app = express();

app.get("/",(req,resp)=>{
    resp.send(userData);
})

app.get("/user/:id",(req,resp)=>{
    const id = req.params.id;
    let filterData = userData.filter((user)=>user.id==id);

    resp.send(filterData);
})


app.get("/username/:name",(req,resp)=>{
    const thisisname = req.params.name;
    let filtering= userData.filter((user)=>user.name==thisisname);
    resp.send(filtering);
})

app.listen(3200);