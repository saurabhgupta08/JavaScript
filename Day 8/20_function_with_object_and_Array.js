function calculateCartPrice(...num1){  // Here "..." is rest operator ,by rest operator we can get multiple value and return as arr
    return num1
}

function calculateCartPrice(val1,val2,...num1){  
    return num1   //It will return only 400 and 6200 in array becaues 100 is in val1 and 500 is in val2
}

console.log(calculateCartPrice(100,500,400,6200));



//pass object in argument
const user ={
    userName:"Saurabh",
    price :199
}

function handleObject(anyObject){
    console.log(`User is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    userName:"Nishant Gupta",
    price:400
})



//passing array in argument
const myNewArray=[1,2222,3,4,5,6,7,8,9]

function printSecond(anyArray){
    console.log(anyArray[1]);
}

printSecond(myNewArray)
printSecond([4,5555,6,7,8,9])