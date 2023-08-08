// fetch('https://api-thirukkural.vercel.app/api?num=2500')
// .then((res) => (res.json()))
// .then(msg => console.log(msg.line1, msg.line2))
// .catch(err => console.log(error));


var p1 = new Promise((resolve, reject) => {
    resolve("sucess");
    fetch('https://api-thirukkural.vercel.app/api?num=1')
    .then((res) => res.json())
    .then((msg) => {
        console.log(msg.line1,msg.line2, msg.tam_exp)
    })
})


var display = document.createElement("h1");
display.innerText = "kani";
document.body(apend);
