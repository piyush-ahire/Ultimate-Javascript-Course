//Arrays

// let a = [1,2,3,4,null,"a"] //contains any type of values
// console.log(a);

// console.log(a[1]);

// console.log("length of the array is", +a.length); //length of the array

// a[1] = 9
// console.log(a); //we can change the contents of the array

// console.log(typeof(a)); //in js arr is a obj


//Arr Methods

// let num = [1,2,3,4]

// let b = num.toString() //converts to the string 
// console.log(b, typeof b);

// let c = num.join("_") //joins with a seperator
// console.log(c, typeof c);

// let d = num.push(56)
// console.log(num, d); //returns new arr length

// let e = num.pop() //removes last element
// console.log(e);

// let f = num.shift()
// console.log(f, num); //shifts one element returns new length

// let g = num.unshift(78)
// console.log(g, num); //adds element to the start returns new length

// let num = [1,2,3,4,5,6]
// console.log(num, num.length);
// delete num[0] //deletes the element, its a operator not method
// console.log(num, num.length); //length does not change after deletion of the element

// let num1 = [7,8,9]

// let num2 = num.concat(num1)
// console.log(num, num1, num2);

// let num = [1,2,9,3,4,5,6]

// let compare =(a,b)=>{
//     return b-a
// }// returns in descending order
// num.sort(compare) //sorts in ascending order
// console.log(num);

// num.reverse() 
// console.log(num);


//splice and slice

// let num = [1,2,9,3,4,5,6]

// num.splice(2,3,23,24,25) //start no of elements elemnts
// console.log(num);

// let deleted_values = num.splice(2,3,23,24,25)
// console.log(deleted_values); //returns deleted values

// let num1 = num.slice(3)
// console.log(num1);

