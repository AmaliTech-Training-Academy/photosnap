




 const open = document.querySelector(".mob-open");
 const close = document.querySelector(".mob-close");
 
 const wrapper = document.querySelector(".mob-wrapper").classList;
 
 open.addEventListener("click",() => {
     wrapper.toggle("opened");
     wrapper.toggle("close");
 });
 
 close.addEventListener("click",() => {
     wrapper.toggle("opened");
     wrapper.toggle("close");
 });

























// const open = document.querySelector(".openMenu");
// open.addEventListener("click", fetchHam);
 
// function fetchHam() {
//     const menu = document.querySelector(".nav-links");
//     // const ham = document.querySelector(".openMenu");
//     menu.classList.add("active");
//     // menu.classList.remove("inactive");
    
// }

// const close = document.querySelector(".openMenu");
// close.addEventListener("click", fetchClose);
// function fetchClose() {
//     const menu = document.querySelector(".nav-links");
//     const closeIcon = document.querySelector(".closeMenu");
//     closeIcon.classList.remove("inactive");
//     close.classList.add("inactive");
//     menu.classList.remove("active");
    




// const open = document.querySelector(".openMenu");
// const close = document.querySelector(".closeMenu"); 

// const navMenu = document.querySelector(".navMenu").classList;

// open.addEventListener("click",() => {
//     navMenu.toggle("opened");
//     navMenu.toggle("close");
// });  

// close.addEventListener("click",() => {
//     navMenu.toggle("opened");
//     navMenu.toggle("close");
// });

