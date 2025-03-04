import { User } from "./user.js";

export class Group {
    id: number;
    name: String;
    users: User[];
    constructor(id:number, name:String){
        this.id = id;
        this.name = name;
        this.users = [];
    }

    addStudent(user: User){
        this.users.push(user)
    }
}