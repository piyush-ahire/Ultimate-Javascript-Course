console.log("Hello");


//variables in js

// var a = 46;
// let b = 79; //used now
// console.log(b);

// a="abc";
// console.log(a);// js allows to modify the values in runtime

// let 79dgg = 45; //not allowed in js
// let var = 0; //reserved keyword not allowed in js




//let var const
// var a = 45;
// var b = null;
// var c =undefined;
// var d = "Piyush";

// {
//     var b = 4;
//     console.log(b);
// }
// console.log(b); //exceeds the block, increases bugs, can redeclared again

// let e = 4;
// {
//     let e = 14;
//     console.log(e);
// }
// console.log(e);//valid for block only, block scoped, can't redeclared

// console.log("const keyword");
// const author = "abc";

//author = 4;  //throws  error const can't change

// console.log(author);





//Primitives and objects in javascript

//7 data types in js
//NNSSBBU primitive data types

// let a = null;
// let b = 345;
// let c = true;
// let d = BigInt("4556");
// let e = "Piyush";
// let f = Symbol("sym");
// let g = undefined;

// console.log(a,b,c,d,e,f,g);
// console.log(typeof(d)); //to check data type

// //objects in js
// //non primitive data types

// const item = {
//     "Piyush" : true,
//     "arryan" : 40,
//     "rohit" : undefined
// }

// console.log(item["Piyush"]); //like dictionary


//practice
//1
// let a = "Piyush";
// let b = 4;
// console.log(a+b);

// //2
// console.log(typeof(a+b));

// //3
// const harry = {
//     name : "p",
//     roll : 1
// }

// // harry = 4; cant change

// //4
// harry["section"] = "A";

// console.log(harry);

// //5
// const dict = {
//     d:"hello"
// }

// console.log(dict.d);