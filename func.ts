import {IUser} from "./interfaces/user.interface";

// 2) протипизировать функции:

//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }

const user: IUser = {name: 'Max', age: 18, gender: 'male'};
console.log(user);

/////////////////////////////////////////////////////////////////////////////////
// function sum(a,b){
//     return a+b
// }

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));

////////////////////////////////////////////////////////////////////////////////////////////////////
// function showSum(a,b){
//     console.log(a + b);
// }

function showSum(a: number, b: number): void {
console.log(a + b);
}
showSum(25, 32);

/////////////////////////////////////////////////////////////////////////////////////////////////
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }



function incAge(user: IUser, inc: number): IUser {
    user.age += inc;
    return user;
}
incAge(user, 20);
console.log(incAge(user, 20));




