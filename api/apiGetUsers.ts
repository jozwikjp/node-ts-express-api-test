import { DataStore } from "../data/data";
import { RequestHandler } from "express";
import { UserSummary } from "../model/shared/userSummary"

export const apiGetUsers: RequestHandler = (req, res, next ) => {

    res.json(DataStore.users.map((item:any) => new UserSummary(item)));
};