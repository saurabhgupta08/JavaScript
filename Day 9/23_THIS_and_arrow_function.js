const user = {
    userName:"Saurabh",
    price :299,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName="Nishant"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let userName="Saurabh1"
//     console.log(this.userName);
// }
// chai()


//Arrow function 

const cahi = () =>{
    let userName="Rahul"
    console.log(this.userName);
}
// cahi()


// const addTwo = (num1 ,num2) =>{      //if you are using parenthesis then you hai to write return 
//     return num1+num2
// }

// const addTwo = (num1 ,num2) => num1+num2     // if you are not writing in parenthesis then you don't have to write return, it's autometicaly return 

// const addTwo = (num1 ,num2) => (num1+num2)

const addTwo = (num1 ,num2) => ({username:"Karan"}) //to return object

console.log(addTwo(4,5));