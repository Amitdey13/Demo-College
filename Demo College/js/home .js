/*****************
    nav section
 *****************/

let nav1 = document.getElementById("nav1");
let nav2 = document.getElementsByClassName("nav2");

function navbar(){
  setInterval(() => {
  if(window.pageYOffset>332){
    nav1.classList.add('nav1_sticky');
    nav2[0].classList.add('nav2_sticky');
    nav2[0].style.color = 'black';
  }
  else{
   nav1.classList.remove('nav1_sticky');
   nav2[0].classList.remove('nav2_sticky');
   nav2[0].style.color = 'white';
  }},500)
};

/*****************
  explore section
 *****************/

function home(){
 window.scrollTo(0,0);
}
 
function explore(){
 window.scrollTo(0,765);
}

function events(){
 window.scrollTo(0,635);
}

function notice(){
 window.scrollTo(0,1235);
}

function faculty(){
 window.scrollTo(0,2450);
}

function achiev(){
 window.scrollTo(0,1900);
}

function alumni(){
 window.scrollTo(0,3050);
}

function course(){
 window.scrollTo(0,3650);
}
function campus(){
  window.scrollTo(0,4250);
}

function placement(){
  window.scrollTo(0,5650);
}

function contact(){
  window.scrollTo(0,6250);
}

function about(){
  window.scrollTo(0,6850);
}


/*****************
  notice section
 *****************/

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }