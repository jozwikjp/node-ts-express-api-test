import {DataStore} from "../data/data";
import {RequestHandler} from "express";
import {UserEvents} from "../model/shared/userEvents"
import {UserSummary} from "../model/shared/userSummary";

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const apiGetUserEventsForDay: RequestHandler = (req, res, next) => {
    var selectedUserEvents;
    if (req.params.userid) {
        if ("all" == req.params.userid) {
            selectedUserEvents = DataStore.userEvent.map((item: any) => new UserEvents(item));
        } else {
            selectedUserEvents = DataStore.userEvent.filter((element) => element.userid == req.params.userid);
        }

    } else {
        var start = new Date();
        start.setHours(0, 0, 0, 0);
        var end = new Date();
        end.setHours(23, 59, 59, 999);
        selectedUserEvents = DataStore.userEvent.filter((element: any) => element.created >= start.getTime() && element.created <= end.getTime());
    }

    if (selectedUserEvents) {
        res.json(selectedUserEvents);
    } else {
        res.json({"status": "failed", "message": "No events found"});
    }

};