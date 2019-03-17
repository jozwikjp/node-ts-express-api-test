import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../data/data";

export const apiCreateUser: RequestHandler = (req, res, next) => {
   var newUID = uuid();
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