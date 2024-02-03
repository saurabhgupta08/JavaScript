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

console.log(regularUser.fullname.userName.FirstName);