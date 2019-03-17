
export class UserEvents {
    id: string
    userid: string
    type: string
    created: string
    constructor (data: any) {
        this.id = data.id;
        this.userid = data.userid;
        this.type = data.type;
        this.created = data.created;

    }

}
