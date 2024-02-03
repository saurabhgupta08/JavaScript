// Array

const myArr =[0,1,2,3,4,5]
const myHeros= ["Shaktiman ","Naagraj"]

// another way to declear an array 
const newArr = new Array(1,5,8,7,9)
// console.log(myHeros);
// console.log(myHeros[1]);


// Array Method 
// myArr.push("Saurabh")
// console.log(myArr);

// myArr.pop() //No argument required , remove last element
// console.log(myArr);

// myArr.unshift("Saurabh") //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(myArr);

// myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))

// const newArray =myArr.join() //to convert array into string
// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray);

// Slice , splice
console.log("A " ,myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B " ,myArr);

const myn2 = myArr.splice(1,3)  //it's change original array 
console.log(myn2);
console.log("C " ,myArr);

