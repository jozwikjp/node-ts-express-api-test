"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const userSummary_1 = require("../model/shared/userSummary");
exports.apiGetUsers = (req, res, next) => {
    res.json(data_1.DataStore.users.map((item) => new userSummary_1.UserSummary(item)));
};
