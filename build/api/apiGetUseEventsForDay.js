"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const userEvents_1 = require("../model/shared/userEvents");
/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.apiGetUserEventsForDay = (req, res, next) => {
    var selectedUserEvents;
    if (req.params.userid) {
        if ("all" == req.params.userid) {
            selectedUserEvents = data_1.DataStore.userEvent.map((item) => new userEvents_1.UserEvents(item));
        }
        else {
            selectedUserEvents = data_1.DataStore.userEvent.filter((element) => element.userid == req.params.userid);
        }
    }
    else {
        var start = new Date();
        start.setHours(0, 0, 0, 0);
        var end = new Date();
        end.setHours(23, 59, 59, 999);
        selectedUserEvents = data_1.DataStore.userEvent.filter((element) => element.created >= start.getTime() && element.created <= end.getTime());
    }
    if (selectedUserEvents) {
        res.json(selectedUserEvents);
    }
    else {
        res.json({ "status": "failed", "message": "No events found" });
    }
};
