export class User {
    id: number;
    login: string;
    password: string;
    profile: string;

    constructor(id:number, login:string, password:string, profile:string){
        this.id = id;
        this.login = login;
        this.password = password;
        this.profile = profile;
    }
}