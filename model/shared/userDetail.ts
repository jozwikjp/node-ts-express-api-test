import { UserSummary } from "./userSummary"
import { UserEvents } from "./userEvents"
export class UserDetails extends UserSummary {
    
    firstName: string
    lastName: string
    events: UserEvents[]
    constructor (userDetail: any, eventData: any) {
        super(userDetail)
        this.id = userDetail.id;
        this.firstName = userDetail.firstName;
        this.lastName = userDetail.lastName;
        this.email = userDetail.email;
        this.phone = userDetail.phone;
        this.events = eventData.map((item:any) => new UserEvents(item));
    }

}

