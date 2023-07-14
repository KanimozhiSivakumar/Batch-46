// copy by value

// var firstName = "Kanimozhi";
// var lastName = "Sivakumar";
// var name = firstName + " " + lastName;
// console.log(name);
// console.log(name.length);


// // copy by reference

// var user = {Firstname:"Kanimozhi", Lastname:"Sivakumar", age:"32"}
// var admin = user;
// admin.Firstname = + "Kanimozhi";
// admin.LastName = + "Sivakumar";
// admin.age = 30;
// admin.age = 31;
// console.log(user.Firstname);
// console.log(user.Lastname);
// console.log(user.age);

// Array

// var user = ["kani", "sivakumar","vivienkumar"];
// // console.log(user.length);
// // for(var i=0; i<user.length; i++) {
// //     console.log(user[i]);
// // }

// console.log(user[0].split(""));
// var name =["kanimozhi sivakaumar"];
// var name1 = name.split(" ").join("*");
// console.log(name1);


// var text = [{
//     "id": "1",
//     "message": "Hi",
//     "name": "Kanimozhi"
//   },
//   {
//     "id": "2",
//     "message": "Hello",
//     "name": "Sivakumar"
//   }];
//   var arr = ["Mani", "Anbu"];
//   console.log(text[0]);
  
//   console.log(text[1]);
  
//   for (var i = 0; i < text.length; i++) {
//     var obj = text[i];
//     console.log(obj.id + " " + obj.message + " " + obj.name);
//   }

// XMLHTTPREQUEST

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://restcountries.com/v3.1/all');
// xhr.responseType = 'json';
// xhr.send();
// xhr.onload = function() {
//    var responseobject = xhr.response;
//    for (var i=0; i < responseobject.length; i++) {
//    console.log(responseobject[i].region);
// }
// }

//functions Types
// 1. Named function
// function add(){
//    return "Addition";

// }

// // console.log(add());


// function addition(a,b)
// {
//    return a + b;
// }

// function subraction(a,b)
// {
//    return a - b;
// }

// // console.log(addition(1,2));
// // console.log(subraction(4,2));

// 2.AnnonymousFunction

// var square = function(a)
// {

//    return a * a;
   

// }

// // console.log(square(5));


// 3.IIFE Function

// var square1 = (function(a)
// {
//    console.log("square");
//    return a * a;

// })();

// Arrow function


// let add = (a,b) => {
//    return a + b;

//    }


// console.log(add(2,3));

//Template literal


// var name = "kanimozhi";
// var age = 30;
// var designation = "project manager";
// var address = "Salem";

// console.log(`my name is ${name} and my age is ${age}. 
// I am working as a ${designation} and living in ${address}.`);

//pass by value and pass by reference

// var name = "kanimozhi";
// function cbv(x)
// {
//     console.log(x);
//     x = "sivakumar";
//     console.log(x);

// }

// cbv(name);
// console.log(name);

// function cbr(a)
// {
//     console.log(a.name);
//     a.name = "sivakumar";
//     console.log(a.name);

// }

// var obj = { name: "kanimozhi"}
// cbr(obj);
// console.log(obj.name);

//spread operator

// var arr = [1,2,3];
//  console.log(arr);
//  console.log(...arr);
// var arr1 = [1,2,3];
// var arr2 = [3,4,5];
// var arr5 = [6,7,8]

// var arr3 = [...arr1, ...arr2, ...arr5];
// console.log(...arr3);

// // rest parameter

// function add(a,b,...args)
// {
//     let num = a + b;
//     for(let n of args)
//     {
//         num = num + n;

//     }
//     return num;
// }
// let result = add(1,2,3,4,5,6,7,5);
// console.log(result);


//map method.

// let arritem = [1,2,3,4,5,6,7];

// var res = arritem.map((ele)=> (ele*2))
// console.log(res);


//filter method
//Reduce method
//object property shorthand method
//class

// var a = "abc";
// var b = userInput[0]
// var a = +(b[0]);
// var sum=0;
// for(let i =0;i<a.length;i++)
// {
//     sum=sum+a.charCodeAt(i)
// }

// console.log(sum);
























































