const myNum=[1,2,3]

const TotalNum=myNum.reduce((acc,currentValue)=>{
    console.log(`Acc: ${acc} CurrentValue:${currentValue}`);
    return acc + currentValue
},0) //here 0 is intial value whice given to Accumulator(Acc)

// const TotalNum=myNum.reduce((acc,curValue)=>acc+curValue,0)  //this same of above code , just above code is more readable
console.log(TotalNum);



//Example

const ShoppingCart=[
    {
        itemName:"Js course",
        price:2555
    },
    {
        itemName:"Python course",
        price:3555
    },
    {
        itemName:"C++ course",
        price:4555
    },
    {
        itemName:"C course",
        price:5555
    },
    {
        itemName:"HTML & CSS course",
        price:5554
    }
]

const TotalPrice=ShoppingCart.reduce((Acc,CurrentItem)=>Acc+CurrentItem.price,0)

console.log(TotalPrice);