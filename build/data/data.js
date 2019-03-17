"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_json_1 = __importDefault(require("./users.json"));
const userEvents_json_1 = __importDefault(require("./userEvents.json"));
class DataStore {
}
DataStore.users = users_json_1.default;
DataStore.userEvent = userEvents_json_1.default;
exports.DataStore = DataStore;
