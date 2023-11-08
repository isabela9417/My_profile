/*============== menu icon navbar ==============*/

var menuIcon = document.querySelector("#menu-icon");
var navBar = document.querySelector(".navBar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

/*====================== scroll active link ==========================*/
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id +"]").classList.add("active");
      });
    }
  })
/*======================= sticky navbar ==================*/
var header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 100);

/*============== remove menu icon nabar when click navbar link (scroll) ==============*/
     menuIcon.classList.remove("bx-x");
     navBar.classList.remove("active");
};

/*======================== Hide and show buttons ===================*/

function readMoreButton() {
    var dots = document.getElementsByClassName("dots");
    var moreText = document.getElementsByClassName("content");
    var para = document.getElementsByClassName("paragraph");
    var btnText = document.getElementsByClassName("btn");

    if (dots.style.display === "inline" || 
        moreText.style.display === "none" ||
        btnText.innerHTML === "Read More") {
        
        moreText.innerHTML = para + moreText;
        btnText.innerHTML = "Read Less";
        
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less"; 
        moreText.style.display = "inline";
    }
  }

/*================== swiper slide ==================*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", 
  },
});

/*================== dark light mode ==================*/
var darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
};
/*================== Scroll reveal ==================*/
ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal(".home-content,.heading", {origin: "top"});
ScrollReveal().reveal(".home-image img, .services-container, .portfolio-box, .testimonial-wraper, .contact form", {origin: "bottom"});
ScrollReveal().reveal(".home-content h1, .about-image img", {origin: "left"});
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {origin: "rightt"});
