const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
/*---------------------------------------------------- about us -------------------------------------------------------*/
$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  
  // typing text animation script
  var typed = new Typed(".typing-2", {
      strings: ["Player", "Developer", "Programmer", "Designer", "Communicator"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-3", {
    strings: ["Dancer", "Developer", "Player", "Designer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-5", {
    strings: ["Programmer", "Developer", "Player", "Designer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});