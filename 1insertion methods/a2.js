let a = document.getElementsByTagName('div')[0]

//a.innerHTML = a.innerHTML + '<h1>Hello world!</h1>'; //for adding content in the  old html

let div = document.createElement('div');
div.innerHTML = '<h1>Hello world!</h1>';
a.appendChild(div) //at the end

a.prepend(div)// before start of container

a.replaceWith(div) //replaces the container directly

