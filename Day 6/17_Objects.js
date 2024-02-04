// const tinderUser =new Object()  // this is singleton object 

const tinderUser = {}           // this is non singleton object 


tinderUser.id="123abc"
tinderUser.name="Rohan"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser= {
    email:"saundcnsdcnj.com",
    fullname:{
        userName:{
            FirstName:"Saurabh",
            SecondName:"Gupta"
        }
    }
}

// console.log(regularUser.fullname.userName.FirstName);


//to marge objects
const obj1 ={1:"a",2:"b"}
const obj2 ={4:"d",3:"c"}
const obj3 ={6:"f",7:"e"}

// const obj4=Object.assign({},obj1,obj2,obj3)  //here "{}" is not compulsory
const obj4 = {...obj1,...obj2,...obj3} //better and easy way to marge 
// console.log(obj4);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


