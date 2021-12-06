// toggle menu-btn
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show")
})
// toggle menu-btn

// toggle nav-menu
document.querySelector(".nav-menu").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show")
})
// toggle nav-menu
ScrollReveal().reveal('.slider');
ScrollReveal().reveal('.news-cards', {
    delay: 500
});
ScrollReveal().reveal('.videoAndImage', {
    delay: 500
});
ScrollReveal().reveal('.sectionContactUs', {
    delay: 500
});
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})
document.querySelector(".nav-menu").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("customizar")
})
document.querySelector(".menu-btn").addEventListener("click",() =>{
   document.querySelector(".menu-btn").classList.toggle('active')
})