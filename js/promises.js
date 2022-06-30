let count = 1;

let getResultString = new Promise((resolve, reject) => {
    count = counts;
    if(count == 0)
        resolve("Count is equal to 0");
    else    
        reject("Count is not equal to 0");
})

// sconsole.log(getResultString);


// Promise chaining
// getResultString.then((val) => {
//     console.log(val);
// }).then(() => {
//     console.log("Yayy count is zero");
// }).catch((val) => {
//     console.log(val);
// }).then(() => {
//     console.log("ohh no, count is not zero");
// })

//rejected promise and the any errors are handeled by the catch method
//finally will execute when the promise code is run
//if there are any unchaught reject method then there will be a exception
getResultString.catch((val)=>{
    console.log(val);
}).finally(() => {
    console.log("Promise executed");
})