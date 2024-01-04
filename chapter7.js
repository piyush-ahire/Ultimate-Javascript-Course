//exercise
// let a = Math.random()

 

 
// let score = 0;

// for(let attempt = 0; attempt<4; attempt++) {
//     let b = prompt("enter the number: ");
//     if(b==a){
//         // console.log("entered num is equal to ",+a);
//         score+=1;
         
    
//     }
//     else if(b<a){
//         // console.log("entered num is smaller than ",+a);
         
         
//     }
//     else{
//         // console.log("entered num is greater than ",+a);
        
        
//     }
// }

// let c = 100 - score;
// console.log("Your score is: ",+c);




//Javascript in browser

//console methods

// console.log(console); //gives all methods of the console

// console.error("error")

// console.assert(5>34) //if fails shows an error

// console.clear() //clear all console

// obj = {
//     a:1,
//     b:2,
//     c:3
// }

// console.table(obj) // gives table of the object

// console.warn("hey don't drink soda") //shows warning

// console.time()
// console.time("a")
// console.timeEnd("a") //time to execute

// //time require

// console.time("forloop");

// for(let i=0; i<4; i++){
//     console.log(344);
// }

// console.timeEnd("forloop")



//Javascript alert, prompt and confirm

// alert("Hello")

// let a = prompt("Enter value of a: ") //stores the value in the variable 


// let b = confirm("Do you want to write on page ")

// if(b){
//     document.write(b)
// }
// else{
//     document.write("No")
// }


//BOM DOM

//console.log(window); //all methods of the window

//DOM document object model
//console.log(document); //js representation of the body

//console.log(document.body);


//document.body.style.background = "red" //can change styling using dom model

//BOM browser object model


//Practice set

//1

// let age = prompt("Enter your age: ")
// age = Number.parseInt(age)

// const canDrive=(age)=>{
//     return age>18? true:false
// }

// if(canDrive(age)){
//     alert("yes you can drive")
// }
// else{
//     alert("You can not drive")
// }

//2
// let runAgain = true;

// const canDrive=(age)=>{
//     return age>18? true:false
// }

// while(runAgain){
//     let age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if(canDrive(age)){
//         alert("yes you can drive")
//     }
//     else{
//         alert("You can not drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }

//3

// let runAgain = true;

// const canDrive=(age)=>{
//     return age>18? true:false
// }

// while(runAgain){
//     let age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if(age<0){
//         console.error("please enter a valid age");
//         break;
//     }

//     if(canDrive(age)){
//         alert("yes you can drive")
//     }
//     else{
//         alert("You can not drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }

 
//4

// let num = prompt("Enter the number: ")

// num = Number.parseInt(num)

// if(num > 4){
//     location.href = 'https://google.com'
// }

//5

// let color = prompt("Enter the color: ")
// document.body.style.background = color