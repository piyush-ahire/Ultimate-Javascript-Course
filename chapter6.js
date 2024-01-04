//Array using loops


// let num = [1,2,3,4]

// for(let i = 0; i<num.length; i++){
//     console.log(num[i]);
// }

//another method
// num.forEach((element)=>{
//     console.log(element);
// })


//for of

// for(let i of num){
//     console.log(i);
// }

//for in
//uses keys
// for(let i in num){
//     console.log(num[i]);
// }


//Map filter reduce


//these methods does not modify original array

//Array map method
//map creates a new array and returns the value 
// let arr = [1,2,3,4]
// let a = arr.map((value, index, array)=>{
//     console.log(value, index, array);
//     return value;
// })

// console.log(a);

//filter method
//filters the array with the value that we passes
// arr2 = [1,2,3,40]

// let a2 = arr2.filter((value)=>{
//     return value<10
// })

// console.log(a2);


//Array reduce

// let arr3 = [1,2,3,4]

// let a3 = arr3.reduce((h1, h2)=>{
//     return h1+h2;
// })
// console.log(a3);


//practice set

//1
// let arr = [1,2,3,4]

// let a = prompt("Enter the number: ")
// a = Number.parseInt(a)

// arr.push(a)

// console.log(arr);

//2

// let arr = [1,2,3,4]
// let a;
// do{
// a = prompt("Enter the number: ")
// a = Number.parseInt(a)
// arr.push(a)

// }while(a!=0)



// console.log(arr);


//3
// let arr = [1,2,3,40]

// let c = arr.filter((value)=>{
//      return value%10 == 0;
// })

// console.log(c);

//4
// let arr = [1,2,3,4]
// let d = arr.map((value)=>{
//     return value * value;
// })

// console.log(d);

//5
// let arr = [1,2,3,4,5,6]

// let e = arr.reduce((a1, a2)=>{
//     return a1 * a2

// })

// console.log(e);
