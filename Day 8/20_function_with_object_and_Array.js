function calculateCartPrice(...num1){  // Here "..." is rest operator ,by rest operator we can get multiple value and return as arr
    return num1
}

function calculateCartPrice(val1,val2,...num1){  
    return num1   //It will return only 400 and 6200 in array becaues 100 is in val1 and 500 is in val2
}

console.log(calculateCartPrice(100,500,400,6200));