const MyNumber =[1,2,3,4,5,6,7,8,9,10]

// const newNumber =MyNumber.map((number)=>number+10)


// we can also use in chain
const newNumber=MyNumber.map((number)=>number*100).map((num)=>num+1).filter((num)=>num>=400)
console.log(newNumber);