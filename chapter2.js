//Operators and expressions

//Arithmatic operators
// let a = 4;
// let b = 6;

// console.log("a + b is",a+b);
// console.log("a - b is",a-b);
// console.log("a * b is",a*b);
// console.log("a / b is",a/b);

// //exponential operator
// console.log("a ** b is",a**b);

// console.log("a % b is",a%b);



//assignment operators

// let c = 5;
// c+=1;
// console.log(c);

// //comparison operators

// let comp1 = 6;
// let comp2 = "6";
// console.log("comp1 == comp2 is", comp1 == comp2);
// console.log("comp1 != comp2 is", comp1 != comp2);

// console.log("comp1 === comp2 is", comp1 === comp2); //equal with data type
// console.log("comp1 !== comp2 is", comp1 !== comp2);
// console.log("comp1 > comp2 is", comp1 > comp2);

// //logical operators
// let x = 5;
// let y = 7;

// console.log(x<y && x==5);
// console.log(x>y || x==5);
// console.log(!false);




//conditional expressions

// let a = prompt("Whats your name?");
// a = Number.parseInt(a);
// //console.log(a);
// //console.log(typeof(a)); //always string

// //alert("hello")

// if(a<0){
//     alert("not valid age")
// }
// else if(a<9){
//     alert("not think to drive")
// }
// else{
//     alert("You can drive")
// }

// console.log("You can", (a<18? "not drive" : "drive"));


//practice
//1

// let age = prompt("What's your age?")

// if(age>10 && age<20){
//     console.log("your age lies betwenn 10 and 20");
// }
// else{
//     console.log("invalid");
// }

//2
// let age = prompt("What's your age?")
 

// switch(age){
//     case '12':
//         console.log("Age is 12");
//         break;
//     case '13':
//         console.log("Age is 13");
//         break;
//     case '14':
//         console.log("Age is 14");
//         break;
//     case '15':
//         console.log("Age is 15");
//         break;
//     default:
//         console.log("invalid");
    
// }


//3
// let num = prompt("Enter the number:")

// if(num%3 == 0 && num%2 == 0){
//     console.log("It is divisible by both 2 and 3");
// }
// else{
//     console.log("Not divisible");
// }

//4
// let num = prompt("Enter the number:")

// if(num%3 == 0 || num%2 == 0){
//     console.log("It is divisible by both 2 or 3");
// }
// else{
//     console.log("Not divisible");
// }

//5

// let age = prompt("Enter your age?")
// let a = age>18? "You can drive" : "You can't drive"
// console.log(a);