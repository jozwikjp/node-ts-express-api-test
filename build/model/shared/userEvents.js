"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEvents {
    constructor(data) {
        if (!data.type) {
            throw new Error("Type is required for event");
        }
        this.id = data.id;
        this.userid = data.userid;
        this.type = data.type;
        this.created = data.created;
    }
}
exports.UserEvents = UserEvents;
