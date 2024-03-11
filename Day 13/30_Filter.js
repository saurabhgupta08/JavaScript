const myArray =[1,2,3,4,5,6,7,8,9]

// const newArr=myArray.filter((num)=>num>4)
const newArr=myArray.filter((num)=>{return num>4}) //If you are using parenthesis then you have to write return, as we saw in previous lec

// console.log(newArr);

// const Arr=myArray.filter((element)=>element%2==0)
// console.log(Arr);

// Same things you can do by foreach loop
// const NewArr =[]

// myArray.forEach((item)=>{
//     if(item>4){
//         NewArr.push(item)
//     }
// })
// console.log(NewArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook=books.filter((bk)=>bk.genre=="Science")
userBook=books.filter((bk)=>{
    return bk.publish>=1990 && bk.genre=="History"
})

console.log(userBook);