function showMobileMenu(id) {
  var x = document.getElementById(id);
  var nav = document.getElementById("mobileMenuIcon");

  if (x.style.display === "block") {
    x.style.display = "none";
    nav.classList.remove("open");
  } else {
    x.style.display = "block";
    nav.classList.add("open");
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}