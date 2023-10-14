"use strict";


const container = document.querySelector('.container');
const sneakers = document.querySelectorAll('.sneakers');
const introContainer = document.querySelector('.intro-container')
const intros = document.querySelectorAll('.intro')



let idx = 0;
let interval = setInterval(run, 3000);

function run() {
    idx++;

    changeImage();
}

function changeImage() {
    if (idx > sneakers.length - 1 && idx > intros.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = sneakers.length -1;
        idx = intros.length - 1
    } 

    container.style.transform = `translateX(${-idx * 508 }px)`;  
    introContainer.style.transform = `translateY(${-idx * 315}px)`
    

}

const nav = document.querySelector('nav')
window.addEventListener('scroll', fixNav)

function fixNav() {

    if(window.scrollY >  nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

