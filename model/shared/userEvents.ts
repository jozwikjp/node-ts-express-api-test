export class UserEvents {
    id: string
    userid: string
    type: string
    created: string

    constructor(data: any) {
        if (!data.type) {
            throw new Error("Type is required for event");
        }
        this.id = data.id;
        this.userid = data.userid;
        this.type = data.type;
        this.created = data.created;

    }

}
