'use strict';


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let nav =document.getElementById('nav_sp');
document.getElementById('hamburger_menu').onclick=function(e){
    nav.classList.toggle("open");
}


nav.querySelector('a').onclick=function(){
    nav.classList.remove("open");
}

let nav_a = nav.querySelectorAll('a');
        for(let i = 0; i < nav_a.length; i++) {
          nav_a[i].addEventListener('click', function() {
            // 以下の記述は共通なので関数化をおすすめします。
            nav.classList.remove("open");
          });
        }