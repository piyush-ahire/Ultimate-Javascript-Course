let x = function(e){
    console.log(e.target.value);
    console.log(e);
    console.log(e.type);
    console.log(e.type, e.clientX, e.clientY);
    alert("Hello1")
}

// let  y =  function(e){
//     alert("Hello2")
// }

btn.addEventListener('click',x )

// btn.addEventListener('click',y)

// let a = prompt("Enter the number: ")
// if(a == 2){
//     btn.removeEventListener('click', y)
// }