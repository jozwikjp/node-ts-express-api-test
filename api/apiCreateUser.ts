import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../data/data";
import { UserDetails } from "../model/shared/userDetail"

const { check, validationResult } = require('express-validator/check');

export const apiCreateUser: RequestHandler = (req, res, next) => {
   var newUID = uuid();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const selectedUser = DataStore.users.find((element: any) => element.email==req.body.email);
    if(selectedUser){
        return res.status(422).json({ "status": "fail", "message": "email address already exists" });
    }


   const newUser = {
        id: newUID,
        email: req.body.email,
        firstName: req.body.firstName || "",
        lastName: req.body.lastName || "",
        phone: req.body.phone,
        password: req.body.password 
        
    }

    DataStore.users.push(newUser);


    const newUserEvent = {
    id: uuid(),
    userid: newUID,
    type: "CREATED",
    created: new Date().getTime()
    }
    
    DataStore.userEvent.push(newUserEvent);

    //
    res.json({"status": "Success","message": `Created new userid: ${newUID}`});

};