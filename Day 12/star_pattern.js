let number =10

for (let i = 0; i < number; i++) {
    let star = "* "
    let space="  "
    if(i==0 || i==(number-1)){
        console.log(star.repeat(number));
    }
    else{
        console.log(star+space.repeat(number-2)+star);
    }
    }