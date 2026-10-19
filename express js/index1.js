import express from "express";
import { route } from "./controller/userController.js";

const app = express();
app.set("view engine","ejs");
app.get("/",route);

app.listen(3534);