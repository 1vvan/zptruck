"use strict"

// Menu Burger
const iconMenu = document.querySelector('.header-burger');
if (iconMenu){
    const headerMenu = document.querySelector('.header-menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}

// Main Slider
$(document).ready(function(){
    $('.main-slider-block').slick({
        dots:true,
        speed: 800,
        autoplay:true,
        infinite:false,
    });
});

// Review Slider
$(document).ready(function(){
    $('.review-slider-block').slick({
        dots:true,
        speed:1200,
        autoplay:true,
    });
});

