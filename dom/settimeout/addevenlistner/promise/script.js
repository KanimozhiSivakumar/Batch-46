let promiseObj = new Promise((resolve, reject) => {
    console.log("getting value from api!!!");
    setTimeout(() => {
        resolve("api value return");
        // reject(new Error("error occured!!!"));
    }, 2000);
});

// console.log(promiseObj);


promiseObj.then(
    (val) => {
        console.log(`value received from promise ${val}`);

    },
    (err) => {
        console.log(`value received form promise ${err}`);

    }
)