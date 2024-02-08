function addTwoNum(number1,number2){     //Here number1 and number2 is parameter 
    return number1+number2
}

let result = addTwoNum(4,5)          //Here 4 and 5 is argument
// console.log("Result :",result);


function loginUserMessage(userName){
    if(!userName){     //if any string will pass then condition will be true , and if there is no string passed then then it's take as false 
        return "Please enter username "
    }
    return `${userName} just logged in `
}

console.log(loginUserMessage("Saurabh"));
