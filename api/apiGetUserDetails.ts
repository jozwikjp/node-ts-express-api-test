import { DataStore } from "../data/data";
import { RequestHandler } from "express";
import { UserDetails } from "../model/shared/userDetail"

export const apiGetUsersDetails: RequestHandler = (req, res, next ) => {
const UserId = req.params.id;
const selectedUser = DataStore.users.find((element: any) => element.id==UserId);
if(selectedUser) {
    const selectedUserEvents = DataStore.userEvent.filter((item: any)=> item.userid==UserId);
    res.json(new UserDetails(selectedUser, selectedUserEvents));
} else {
    res.json({"status": "failed", "message": "User not found"});
}

};