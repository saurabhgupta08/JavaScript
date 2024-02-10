

function one(){
    const userName="Saurabh"

    function two(){
        const website="Chai or code"
        // console.log(userName);
    }
    // console.log(website);    //this will not run becouse "website" is in another scope 
    two()
}

one()


if(true){
    const userName="Saurabh"
    if(userName==="Saurabh"){
        const website="chai or code"
        // console.log(userName + website);

    }
    // console.log(website);  //same problem it is not in same scope 
}



//++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++

addOne(2) //It will not give error

function addOne(num){
    return num+1
}



addTwo(2)   // This will error  
const addTwo=function(num){
    return num+2
}