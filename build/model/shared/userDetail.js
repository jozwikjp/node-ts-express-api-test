"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSummary_1 = require("./userSummary");
const userEvents_1 = require("./userEvents");
class UserDetails extends userSummary_1.UserSummary {
    constructor(userDetail, eventData) {
        super(userDetail);
        this.id = userDetail.id;
        this.firstName = userDetail.firstName;
        this.lastName = userDetail.lastName;
        this.email = userDetail.email;
        this.phone = userDetail.phone;
        this.events = eventData.map((item) => new userEvents_1.UserEvents(item));
    }
}
exports.UserDetails = UserDetails;
