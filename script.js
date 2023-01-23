const hamburgerButton = document.getElementById('hamburger-button');
const navBarLinks = document.getElementById('navbar-links');

hamburgerButton.addEventListener('click', () => {
    console.log('butt')
    navBarLinks.classList.toggle('active')
})



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
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


// Initialize and add the map
function initMap() {
  // The location
  const neighbors = { lat: 32.044178, lng: -58.655726 };
  // The map, centered
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: neighbors,
  });
  // The marker, positioned
  const marker = new google.maps.Marker({
    position: neighbors,
    map: map,
  });
}

window.initMap = initMap;



