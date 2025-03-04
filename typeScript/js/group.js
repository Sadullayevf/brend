export class Group {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.users = [];
    }
    addStudent(user) {
        this.users.push(user);
    }
}
