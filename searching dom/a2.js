let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"

let ct = document.getElementById("firstcardtitle")
console.log(ct);

let cts = document.querySelectorAll(".card-title")
cts[0].style.color = "red"
cts[1].style.color = "blue"
cts[2].style.color = "green"
console.log(cts);

document.querySelector(".this").style.color = "cyan"

//to get element by tagname
console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));