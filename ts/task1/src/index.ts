import { sumFun } from "./calculate.js";

// 1- 
const arr: (string)[] = ["zyad", "ahmed"]

// 2-
const id: string | number = "123";

// 3-
function sum(a: number, b: number): number{
    return a + b;
}

// 4=
interface IUser{
    id:number,
    name: string,
    role: string
    age?:number
}

const obj: IUser = {
    id: 1,
    name: "zoz",
    role: "admin",
}

// 5-
function getFirstItem<T> (items: T[]): T|undefined {
    return items[0]
}

console.log(getFirstItem<number>([1, 2, 3]))
console.log(getFirstItem<string>(["1", "2"]))

// 6- 
enum roles{
    admin,
    user,
    manger
}
console.log(roles.admin)


// 7-
console.log(sum(1, 2));

// 8-
/*
    decorator is like the configurations used to customize a class like the component and service decorators in angular 
*/