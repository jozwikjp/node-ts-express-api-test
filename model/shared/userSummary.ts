
export class UserSummary {
    id: string
    email: string
    phone: string
    constructor (data: any) {
        this.id = data.id;
        this.email = data.email;
        this.phone = data.phone;
    }

}