import { sumFun } from "./calculate.js";
// 1- 
const arr = ["zyad", "ahmed"];
// 2-
const id = "123";
// 3-
function sum(a, b) {
    return a + b;
}
const obj = {
    id: 1,
    name: "zoz",
    role: "admin",
};
// 5-
function getFirstItem(items) {
    return items[0];
}
console.log(getFirstItem([1, 2, 3]));
console.log(getFirstItem(["1", "2"]));
// 6- 
var roles;
(function (roles) {
    roles[roles["admin"] = 0] = "admin";
    roles[roles["user"] = 1] = "user";
    roles[roles["manger"] = 2] = "manger";
})(roles || (roles = {}));
console.log(roles.admin);
// 7-
console.log(sum(1, 2));
// 8-
/*
    decorator is like the configurations used to customize a class like the component and service decorators in angular
*/ 
//# sourceMappingURL=index.js.map