/*============== menu icon navbar ==============*/

var menuIcon = document.querySelector("#menu-icon");
var navBar = document.querySelector(".navBar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

/*====================== scroll section active link ==========================*/
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

function readMoreButton(button) {
    // Find the parent paragraph element
    const paragraph = button.previousElementSibling;
    const content = paragraph.querySelector('.content');
    const dots = paragraph.querySelector('.dots');

    // Toggle the display of content and dots
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "inline";
        dots.style.display = "none";      
        button.textContent = "Read Less"; 
    } else {
        content.style.display = "none";  
        dots.style.display = "inline";  
        button.textContent = "Read More";
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

function sendEmail(){
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("emailAddress").value;
    var number = document.getElementById("mobileNumber").value;
    var subjectEmail = document.getElementById("emailSubject").value;
    var mail_message = document.getElementById("message").value;

    var emailContent = "Name: " + name + "<br/>Phone: " + number + "<br/>Email: " + email + "<br/>Message: " + mail_message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "isabelachana@gmail.com",
        Password: "285B162ECD2B63B990D2BA4AA15B83A68F9B",
        To: 'isabela.tlhakudi@gmail.com',
        From: "isabelachana@gmail.com",
        Subject: subjectEmail,
        Body: emailContent
    }).then(
        message => {
            if (message === 'OK')
              {swal({ title: "Message Sent Successfully", text: "I will get in touch with you as soon as I can", imageUrl: "images/thumbs-up.jpg" });
              document.querySelector("form").reset(); 
}

        }
    );
}

// validating the form inputs


function validateForm() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    
    // Check if mobile number has 10 digits
    if (mobileNumber.length !== 10) {
        alert("Please enter a valid mobile number (10 digits).");
        return false;
    }
    
    // You can add more validation rules as needed
    return true; // Allow form submission if all validations pass
}
