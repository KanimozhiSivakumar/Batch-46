// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//         // reject("error")

//     }, 2000);
// });


// p.then((val) => {
//     console.log(val);
//     return val+2;
// }, (err) => {
//     console.log(err);

// }).then((val) => {
//     console.log(val);
//     return val*3;
// }).then((val) => {
//     console.log(val);
//     return val*4;
// });

// multipromise

//  let q = new Promise((resolve, reject) => {
//     setTimeout (()=> {
//         resolve(5);
//     }, 2000);
// });

// q.then((val1) => {
//     console.log(val1);
//     return val1*2;

// });

// q.then((val1) => {
//     console.log(val1);
//     return val1*3;

// });

// q.then((val1) => {
//     console.log(val1);
//     return val1*4;

// });

// promise all concept

var a = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1 st promised has resolved");
        resolve(100);
    }, 1000);
});


var b = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("2 nd promised has resolved");
        resolve(200);
    }, 2000);
});


var c = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("3 rd promised has resolved");
        resolve(300);
    }, 3000);
});


a.then((val2) => {
    console.log(val2);
    return val2;
}).then;

Promise.all([a, b, c]).then((results) => {
    const total = results.reduce((a, b) => a+b);
    
    console.log(`Result: ${results}`);
    console.log(`Total : ${total}`);
});



















