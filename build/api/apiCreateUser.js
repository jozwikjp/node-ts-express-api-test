"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../data/data");
exports.apiCreateUser = (req, res, next) => {
    var newUID = v4_1.default();
    const newUser = {
        id: newUID,
        email: req.body.email,
        firstName: req.body.firstName || "",
        lastName: req.body.lastName || "",
        phone: req.body.phone,
        password: req.body.password
    };
    data_1.DataStore.users.push(newUser);
    const newUserEvent = {
        id: v4_1.default(),
        userid: newUID,
        type: "CREATED",
        created: new Date().getTime()
    };
    data_1.DataStore.userEvent.push(newUserEvent);
    //
    res.json({ "status": "Success", "message": `Created new userid: ${newUID}` });
};
