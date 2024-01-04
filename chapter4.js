//Strings

// let name = "Harry"
// console.log(name.length);   
// console.log(name[0]);   

// let friend = 'adesh'
// console.log(friend);

//Template literals
// let boy1 = "Pramod"
// let boy2 = "Nikhil"

// let sentence = `${boy2} is friend of ${boy1}`
// console.log(sentence);
// we can put variable in template literal , known as string 

//Escape sequence character

// let fruit = 'bana\'na'
// console.log(fruit);


//String methods

// let name = "Harry bhai";
// console.log(name.length); //property

// console.log(name.toUpperCase()); //function
// console.log(name.toLowerCase()); //function

// console.log(name.slice(2,4));
// console.log(name.slice(2));

// console.log(name.replace("bhai", "bhau"));

// let name2 = "adi"
// console.log(name.concat(" is a friend of ", name2));

// let name3 = " piyush  "
// console.log(name3.trim());
// console.log(name3.charAt(1));


//Practice set

//1
// console.log("har\"".length);

//2
// const sentence = "This is a toy"
// const word = "toy"

// console.log(sentence.includes(word)); // returns true if word is present in the sentence

// console.log(sentence.startsWith("T"));
// console.log(sentence.endsWith("y"));

//3
// let str = "Please give Rs 1000"

// console.log(Number.parseInt(str.slice(15)));
// console.log(typeof(Number.parseInt(str.slice(15))));

//4
// let friend = "Deepika" //strings are immutable
// friend[3] = "r"
// console.log(friend);