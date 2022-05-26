'use strict';


let click_menu = document.getElementById('menu_btn');
let close_menu = document.getElementsByClassName("hide");

click_menu.onclick=function(){
    click_menu.classList.toggle("active");
    close_menu[0].classList.toggle("open");
}