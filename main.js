let box = document.querySelector('.box');
const boxMous = document.querySelector('.box__mouse');
box.addEventListener("mousemove", function (e) {
    let num = Math.floor(Math.random() * 10000)
    boxMous.textContent = 'COLOR: #' + num;
    box.style.backgroundColor = '#' + num;
})
// random color generation