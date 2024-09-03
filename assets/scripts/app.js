// import { apiKey } from "./util.js";

// import apiKey  from "./util.js";

// import { abc, bce } from "./util.js"

// console.log(abc,bce);

// import * as util from "./util.js" 
// console.log(util.abc, util.bce, util.default);

// import * as util from "./util.js" 
// console.log(util.default("Luca", "How are you?"));


// import * as util from "./util.js" 
// console.log(util.default());

// import * as util from "./util.js" 
// console.log(util.default("Luca"));

// class User {
//     constructor(userName, age) {
//         this.name = userName
//         this.age = age
//     }

//     greetings() {
//         console.log("hi");
//     }
// }

// let user1 =  new User("luca", 30);
// console.log(user1);
// user1.greetings();

// ARRAY METHODS RECAP
const hobbies = ["sport", "music", "cinema"]
hobbies.push("writing")

const index = hobbies.findIndex((item)=> item === "writing") 
// console.log(index);

const textTransform = hobbies.map((item) => item + "!")
// console.log(textTransform);

const textTypeTransform = hobbies.map((item) => ({passion: item}) )
// console.log(textTypeTransform);

for (let i = 0; i < hobbies.length; i++) {
    // console.log(hobbies[i]);
}

for (let i = hobbies.length - 1; i >= 0; i--) {
    // console.log(hobbies[i]);
    
}

// DESTRUCTURING
// const array = ["luca", "fabio"];

// const user1 = array[0];
// const user2 = array[1];

// console.log(user1, user2);

// con il destructuring posso fare così

// const [user1, user2] = ["luca", "fabio"];
// console.log(user1, user2);

// si può usare anche per gli oggetti

// const user = {
//     name: "Max", 
//     age: 34
// }

// const name = user.name
// const age = user.age

// console.log(name, age);

// destrutturato
// const {name, age} = {
//     name: "Max", 
//     age: 34
// }
// // il nome deve essere uguale alla key
// console.log(name, age);

// DESTRUCTURING IN FUNZIONE
// const user = {
//     id: 12,
//     name: "ivo"
// }

// function test(object) {
//     return console.log(object.name, object.id);
    
// }

// let result = test(user);

// destructured

const user = {
    id: 12,
    name: "ivo"
}

// function test({id, name}) {
//     return console.log(id, name);
    
// }

// let result = test(user);

// SPREAD OPERATOR
const test = ["sport", "music", "math"];
const test2 = ["reading"];

const spreadMerge = [...test, ...test2]
console.log(spreadMerge);
const extendUser = {
    isAdmin: true,
    ...user
}
console.log(extendUser);

// FUNCTIONS AS VALUES
function handleTimeout() {
    console.log("Time Out");
}
// stessa funzione ma con arrow salvata in costante per nominarla
const handleTimeout3 = ()=>{
    console.log("timeout-3");
    
};

setTimeout(handleTimeout3, 2000);

// questo sopra è uguale a questo 

setTimeout (function handleTimeout2() {
    console.log("timeout");
    
}, 2000);

// che è uguale a questo 
setTimeout(()=> {
    console.log("timeout-2");
    
}, 2000)

// possibile farlo anche con funzioni non native
function greeter (greetFn) {
    greetFn();
}

greeter(handleTimeout);

