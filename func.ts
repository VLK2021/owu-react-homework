// 2) протипизировать функции:

//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }

const user:{
    name:string,
    age:number,
    gender:string
} = {name: 'Max', age: 18, gender: 'male'};

/////////////////////////////////////////////////////////////////////////////////
// function sum(a,b){
//     return a+b
// }

function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(1, 2));

////////////////////////////////////////////////////////////////////////////////////////////////////
// function showSum(a,b){
//     console.log(a + b);
// }

function showSum(a:number, b:number){
    return a+b;
}
showSum(2,3);

/////////////////////////////////////////////////////////////////////////////////////////////////
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }



// function incAge(someUser:string, inc:number){
//     someUser.age+=inc
//     return someUser
// }
// incAge(user, 20)




