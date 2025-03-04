import { Group } from "./group.js";
import { User } from "./user.js";
let sidebars = document.getElementById("sidebar");
let groups = [];
let group1 = new Group(1, "1-kt-23");
let group2 = new Group(2, "2-kt-23");
group1.addStudent(new User("John", 20));
group1.addStudent(new User("Jon", 25));
group2.addStudent(new User("Alice", 22));
group2.addStudent(new User("Alis", 32));
group2.addStudent(new User("Ali", 19));
groups.push(group1, group2);
drawGroup();
function drawGroup() {
    let s = "";
    groups.forEach(group => {
        s += `
            <div class= "content">
                <button onclick="handleClick(${JSON.stringify(group)})">${group.name}</button>
            </div>
        `;
    });
    sidebars.innerHTML = s;
}
window.handleClick = function handleClick(group) {
    console.log(group);
};
