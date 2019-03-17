import express from "express";
import { DataStore } from "./data/data";
import { apiGetUsers } from "./api/apiGetUsers";
import { apiGetUsersDetails } from "./api/apiGetUserDetails";
import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();


const app = express();
//console.log(JSON.parse(JSON.stringify(DataStore.users)));

app.get("/users", apiGetUsers);
app.get("/users/:id", apiGetUsersDetails);
app.post("/users", apiGetUsersDetails);


app.listen(process.env.PORT || 8091 , ()=> {console.log("Server started ...")});