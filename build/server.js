"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetUsers_1 = require("./api/apiGetUsers");
const apiGetUserDetails_1 = require("./api/apiGetUserDetails");
const app = express_1.default();
//console.log(JSON.parse(JSON.stringify(DataStore.users)));
app.get("/users", apiGetUsers_1.apiGetUsers);
app.get("/users/:id", apiGetUserDetails_1.apiGetUsersDetails);
app.listen(process.env.PORT || 8091, () => { console.log("Server started ..."); });
