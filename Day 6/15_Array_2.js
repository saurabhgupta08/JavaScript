const myArr =[0,1,2,3,4,5]
const myHeros= ["Shaktiman ","Naagraj"]

// myArr.push(myHeros)  // It will take whole myHeros as a element
// console.log(myArr);
// console.log(myArr[6][0]);

// const newArr = myArr.concat(myHeros) //it will not change original array
// console.log(newArr)
// console.log(myArr)

// const all_Arra = [...myArr,...myHeros] //this is better way to merge arrays 
// console.log(all_Arra);

const another_array =[1,2,3,[4,5],6,7,[8,[9,10]],11]
const real_another_arry=another_array.flat(Infinity)
console.log(real_another_arry);

console.log(Array.isArray("Saurabh"))
console.log(Array.from("Saurabh"))  //Creates an array from an iterable object.
console.log(Array.from({name:"Saurabh"})) //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements.