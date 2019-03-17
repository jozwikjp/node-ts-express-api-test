"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const userDetail_1 = require("../model/shared/userDetail");
exports.apiGetUsersDetails = (req, res, next) => {
    const UserId = req.params.id;
    const selectedUser = data_1.DataStore.users.find((element) => element.id == UserId);
    if (selectedUser) {
        const selectedUserEvents = data_1.DataStore.userEvent.filter((item) => item.userid == UserId);
        res.json(new userDetail_1.UserDetails(selectedUser, selectedUserEvents));
    }
    else {
        res.json({ "status": "failed", "message": "User not found" });
    }
};
