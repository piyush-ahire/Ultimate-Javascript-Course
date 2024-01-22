// let a = new Date();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();

// console.log(h,m,s,a);


setInterval(() => {
    let d = new Date();
    time1.innerHTML = d
}, 1000);



setInterval(() => {
    let date = new Date();
    let options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    let d = date.toLocaleTimeString("en-us", options)
    time.innerHTML = d
}, 1000);
