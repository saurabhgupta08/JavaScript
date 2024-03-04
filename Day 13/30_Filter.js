const myArray =[1,2,3,4,5,6,7,8,9]

// const newArr=myArray.filter((num)=>num>4)
const newArr=myArray.filter((num)=>{return num>4}) //If you are using parenthesis then you have to write return, as we saw in previous lec

console.log(newArr);