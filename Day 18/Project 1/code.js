console.log("Saurabh Gupta tera baap hai ");

// Generate a random color 
const randomColor=function(){
    const hex ='123456789ABCDEF';
    let color ='#'
    
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random() *16)]
    }
    return color

}


const changeBG=function(){
    document.body.style.backgroundColor=randomColor();
}

let chnageBackgroundColor

document.querySelector('#start').addEventListener('click',function(){
    if(!chnageBackgroundColor){
        chnageBackgroundColor=setInterval(changeBG,1000)
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(chnageBackgroundColor)
    chnageBackgroundColor=null;
})


