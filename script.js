$(document).ready(function(){

    $(window).load(function(){
        $('.preloader').delay(500).slideUp('slow');
    });

  

    var typed = new Typed(".typing", {
        strings: ["HAT", "JEANS", "DRESS", "SHOES"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



});



/* SCROLL TO TOP */
scrollUp = document.getElementById("myBtn");


  window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

/******AOS******/

AOS.init();

/******FAVORITE******/


let one = document.getElementById("one");
one.addEventListener("click", function(){
  one.style.color = "#ff0000";
})


let two = document.getElementById("two");
two.addEventListener("click", function(){
  two.style.color = "#ff0000";
})


let three = document.getElementById("three");
three.addEventListener("click", function(){
  three.style.color = "#ff0000";
})


let four = document.getElementById("four");
four.addEventListener("click", function(){
  four.style.color = "#ff0000";
})


let five = document.getElementById("five");
five.addEventListener("click", function(){
  five.style.color = "#ff0000";
})



let six = document.getElementById("six");

six.addEventListener('click', function(){
  six.style.color = "#ff0000";
})


/************************ACTIVE SCROLL******************************* */

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


/* Animation scrool */

/*var smoothScroll = {

  move : function (old, des, actual) {
    easeInOutQuart = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
    actual += 1;
    ease = easeInOutQuart(actual / 300);
    delta = des - old;
    delta *= ease;
    delta += old;
    window.scrollTo(0, delta);
    if (actual < 300) {
      window.requestAnimationFrame(function () {
        smoothScroll.move(old, des, actual);
      });
    }
  },

  linkInit : function (e) {
    e.preventDefault();
    link = e.target.getAttribute("href").substr(1);
    block = document.getElementById(link).offsetTop;
    client = document.documentElement.scrollTop;

    smoothScroll.move(client, block, 0);
  },

  init : function () {
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      link = links[i].getAttribute("href");
      if (link.search("#") == 0 & link.substr(1) != "") {
        links[i].onclick = smoothScroll.linkInit;
      }
    }
  }
};

window.onload = smoothScroll.init; */
