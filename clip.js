var section = document.querySelector('section');
var innerText = document.querySelector('.innerText');
var Text = document.querySelector('.Text');
window.addEventListener('scroll' , ()=>{
    let value = window.scrollY;
    section.style.clipPath = `circle(${value}px at center)`;
    innerText.style.left = `${100-value/5}%`
    Text.style.left = `${100-value/5}%`
})