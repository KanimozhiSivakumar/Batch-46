const add = (a, b, disp) =>{
    disp(a+b);
    return a+b;
};

const display = (val) => {
    console.log("The final value is from callback function :", val);

};
console.log("the final value is :", +add(20,40,display));



