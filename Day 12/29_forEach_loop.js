const myArray =["c","cpp","Python","Js","Java"]

myArray.forEach(function (Language) {
    // console.log(Language);
})


// myArray.forEach((Language)=>console.log(Language))


function Print(item){
    console.log(item);
}
// myArray.forEach(Print)
// Print("Saurabh")


myArray.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const newArr=[
    {
        Language:"JavaScript",
        LanguageFileName:"js"
    },
    {
        Language:"Java",
        LanguageFileName:"java"
    },
    {
        Language:"Python",
        LanguageFileName:"py"
    },
    {
        Language:"C",
        LanguageFileName:"c"
    }
]
newArr.forEach((item)=>{
    console.log(item.LanguageFileName);
})

//forEach loop is not return