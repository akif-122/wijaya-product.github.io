
 let mobileMenu = document.querySelector(".mobile-menu");
 let menuToggler = document.querySelector(".mobile-menu-btn");
 let body = document.querySelector("body");



 menuToggler.addEventListener("click", function(){
 	mobileMenu.style.right = "0";
 })

  mobileMenu.addEventListener("click", function(){
 	mobileMenu.style.right = "0";
 })

 body.addEventListener("click", function(){
 	mobileMenu.style.right = "-100%";
 },true)

