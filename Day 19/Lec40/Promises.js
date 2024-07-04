const promisesOne= new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({userName:"Saurabh Gupta",Enrollment:210200111013})
    },2000)
})

promisesOne.then(function(x){
    console.log(x);
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log("yooo");
    },2000)
}).then(()=>{
    console.log("Second Promise consumed");
})

const promisesFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false
        if(!error){
            resolve({userName:"Saurabh Gupta",City:"Rajkot"})
        }
        else{
            reject('ERROR:Something is wrong')
        }
    },2000)
})

promisesFour.then((user)=>{
    console.log(user);
    console.log(user.userName);
    return user.userName;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("The promise either resolved or rejected"))

const promisesFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName:"JavaScript",City:"Rajkot"})
        }
        else{
            reject('ERROR:Something is wrong in js')
        }
    },2000)
})

async function consumePromiseFive (){
    try {
        const respons =await promisesFive
        console.log(respons);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser (){
//     try {
//         const respons =await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await respons.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:',error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/posts').then((respons)=>{
    return respons.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("E: ",error);
})