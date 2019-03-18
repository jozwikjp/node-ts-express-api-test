"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetUsers_1 = require("./api/apiGetUsers");
const apiGetUserDetails_1 = require("./api/apiGetUserDetails");
const apiGetUseEventsForDay_1 = require("./api/apiGetUseEventsForDay");
const bodyparser = __importStar(require("body-parser"));
const apiCreateUser_1 = require("./api/apiCreateUser");
const { check, validationResult } = require('express-validator/check');
const jsonParser = bodyparser.json();
const app = express_1.default();
//console.log(JSON.parse(JSON.stringify(DataStore.users)));
app.get("/users", apiGetUsers_1.apiGetUsers);
app.get("/users/:id", apiGetUserDetails_1.apiGetUsersDetails);
app.get("/events/user/day", apiGetUseEventsForDay_1.apiGetUserEventsForDay);
app.get("/events/user/:userid", apiGetUseEventsForDay_1.apiGetUserEventsForDay);
app.post("/users", jsonParser, [
    // email must be an email
    check('email').isEmail(),
    check('password').not().isEmpty(),
    check('phone').isMobilePhone().optional()
], apiCreateUser_1.apiCreateUser);
app.listen(process.env.PORT || 8091, () => { console.log("Server started ..."); });
