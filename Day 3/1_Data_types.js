//Primitive
// 7 types: Strings , Number , Boolean , Null , Undefined , Symbol ,BigInt

const score=100 //datatype is number
const scorevalue=100.3 // datatype is number
const isLoggedIn=false // Boolean datatype
const outsideTemp =null // object datatype
let userEmail  //undefined datatype
const bigNumber=252424266963262925232n  //After writing n in suffix js store as bigint


//Reference (Non primitive)
//Array , Objects ,Functions
const heros = ["Shaktiman","Naagraj","Doga"]  //it's reture object datatype
let myObject ={         //it's reture object datatype
    name:"Saurabh",
    age:20
}                                        
const myFunction =function(){    //it's reture function datatype
    console.log("Hello World");
}

console.log(typeof myFunction);

// JavaScript is a dynamically typed language. This means that the type of a variable is not declared and can change at runtime. For example, you can start with a variable that is assigned a number, and then later assign it a string. This would not be possible in a statically typed language, where the type of a variable must be declared and cannot change.

