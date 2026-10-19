import { name } from "../models/userModel.js";

export function route(req,resp){
    const userData = name();
    console.log(userData);

    resp.render("userView",{users:userData});

}