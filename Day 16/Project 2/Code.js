const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    //Here parseInt used for Converts a string to an integer.
    //and .value used for get enter value 
    const weight=parseInt(document.querySelector('#weight').value);

    const results=document.querySelector('#results')

    const bmiResults=document.querySelector('#bmiResults')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML='Please Give valid height';
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML='Please Give valid weight';
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            bmiResults.innerHTML=`You are under weight`
        }
        else if(bmi>24.9){
            bmiResults.innerHTML=`You are overweight`
        }
        else if(18.6 < bmi < 24.9){
            bmiResults.innerHTML=`You are in Normal Range`
        }
    }



})