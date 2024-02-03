//singleton
//object.create

//object literals


const mySym = Symbol("Key1")

const JsUser ={
    name : "Saurabh",              //Js will take automatically "name" key as string 
    "Full Name": "Saurabh Gupta",
    age :21,
    [mySym]:25,              //syntax for using symbol in object
    location:"Rajkot",
    email:"saurabhgupta635635@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays: ["Monday","Friday"]
}

// console.log(JsUser.name);
// console.log(JsUser["Full Name"]);  //Another way to get value 
// console.log(typeof (JsUser[mySym])); //it's show whatever you store  in value
// console.log(JsUser[mySym]);


// for changes 
JsUser.email="saurabhgupta52623@gmail.com"
// console.log(JsUser);

//To freeze an object (after freeze we can't change in object )
// Object.freeze(JsUser)
// JsUser.email="saurabhgupta00000000000@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this["Full Name"]} your email is ${this.email}`);
}
JsUser.greeting()
JsUser.greetingTwo()