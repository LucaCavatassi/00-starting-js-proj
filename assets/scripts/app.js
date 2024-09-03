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

const hobbies = ["sport", "music", "cinema"]
hobbies.push("writing")

const index = hobbies.findIndex((item)=> item === "writing") 
console.log(index);

const textTransform = hobbies.map((item) => item + "!")
console.log(textTransform);

const textTypeTransform = hobbies.map((item) => ({passion: item}) )
console.log(textTypeTransform);

for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

for (let i = hobbies.length - 1; i >= 0; i--) {
    console.log(hobbies[i]);
    
}