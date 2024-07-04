const user = {
    userNmae : "Saurabh Gupta",
    loginCount : 8,

    getUserInfo : function(){
        console.log(`Hey I am ${this.userNmae} and I login ${this.loginCount} times `);
        console.log(this);
    }
    
}

// user.getUserInfo()

// console.log(this);



// Construction Function 
function User(userName,loginCount,isloggedIn)
{
    this.userNmae=userName
    this.loginCount=loginCount
    this.isloggedIn=isloggedIn
    
    this.greeting=function(){
        console.log(`Welcome ${this.userNmae}`);
    }
    return this
}

const userOne = new User("Saurabh Gupta",8,true)
const userTwo = new User("Nishant Gupta",25,false)

console.log(userOne);
userTwo.greeting()
