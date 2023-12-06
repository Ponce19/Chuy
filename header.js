// JavaScript para cambiar el color de fondo y opacidad al hacer scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector(".fade-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

