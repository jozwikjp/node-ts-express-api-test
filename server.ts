import express from "express";
import { DataStore } from "./data/data";
import { apiGetUsers } from "./api/apiGetUsers";
import { apiGetUsersDetails } from "./api/apiGetUserDetails";
import { apiGetUserEventsForDay } from "./api/apiGetUseEventsForDay";
import * as bodyparser from "body-parser";
import { apiCreateUser } from "./api/apiCreateUser";
const { check, validationResult } = require('express-validator/check');
const jsonParser = bodyparser.json();


const app = express();
//console.log(JSON.parse(JSON.stringify(DataStore.users)));

app.get("/users", apiGetUsers);
app.get("/users/:id", apiGetUsersDetails);

app.get("/events/user/day", apiGetUserEventsForDay);
app.get("/events/user/:userid", apiGetUserEventsForDay);
app.post("/users", jsonParser,[
    // email must be an email
    check('email').isEmail(),
    check('password').not().isEmpty(),
    check('phone').isMobilePhone().optional()

], apiCreateUser);


app.listen(process.env.PORT || 8091 , ()=> {console.log("Server started ...")});