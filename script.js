// const hamburgerButton = document.getElementById('hamburger-button');
// const navBarLinks = document.getElementById('navbar-links');

// hamburgerButton.addEventListener('click', () => {
//     navBarLinks.classList.toggle('active')
// })



const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})



let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("hero-slides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}



function initMap() {

  const neighbors = { lat: 32.044178, lng: -88.655726 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: neighbors,
  });

  const marker = new google.maps.Marker({
    position: neighbors,
    map: map,
  });
}

window.initMap = initMap;



