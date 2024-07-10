const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleDateString());

setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)