// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 1000;

//     setTimeout(() => {
//         if(random > 500){
//         resolve(random);
//         }else{
//             reject(random);
//         }
//     }, random);
// });

// // promise.then((value) => console.log(value));

// promise
//     .then((value) => console.log("resolve", value))
//     .catch((value) => console.log("reject", value))
//     .finally(() => console.log("finally"));



// fetch("http://api.qotable.io/random")
//     .then((response) => {
//     return response.json();
// })
//     .then((result) => {
//         console.log(result);
// });



// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 1000;

//     setTimeout(() => {
//         resolve(random);
//     }, random);
// });

// const promise2 = async () => {
//     // const random = Math.random() * 1000;
//     console.log("Pocetak:");
//     const randomNumbre = await promise;
//     console.log(randomNumbre);
//     const random2 = await promise;
//     console.log(randomNumbre);
//     const random3 = await promise;
//     console.log(randomNumbre);
//     const random4 = await promise;
//     console.log(randomNumbre);

//     return random;
// }

// promise2().then((value) => console.log(value));
// console.log("main funkcija");


Promise.then(() => {
    new Promise().then(() => {
    new Promise().then((value) => value);
    });
});

Promise.all([promise.promise]);
Promise.race([]);
Promise.allSettled([]);