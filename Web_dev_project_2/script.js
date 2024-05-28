// ========================================================================= //
//  SPAPP
// ========================================================================= //

$(document).ready(function(){
  var app = $.spapp({
    defaultView: "#header",
    templateDir: "views/"

  });
  app.run();
});

// ========================================================================= //
//  Typing effect
// ========================================================================= //

var i = 0;
var txt1 = 'Welcome'; 
var speed = 40;

var switch_status = 0;

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("greeting1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
  
}

window.onload = function() {
  typeWriter1();
};

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(document).ready(function() {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    console.log("Clicked");
    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
});


function submitForm(){
  document.getElementById("contact_form").submit();
  window.alert('Eyyy');
};

// ========================================================================= //
//  Modal
// ========================================================================= //

document.getElementById("contact_form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  if (this.checkValidity()) {
      openModal();
  }
  this.classList.add('was-validated'); 
});

function openModal() {
  
  console.log('Form Submitted');

  var modal = document.getElementById("myModal");

  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
    location.reload();
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      location.reload();
    }
  }
}

// ========================================================================= //
//  Theme switcher
// ========================================================================= //
let current_theme = 'light';
const htmlTheme = document.getElementById('themeTag');
const themeIcon = document.getElementById('theme_button');

function toggleTheme(){
  console.log('Theme switched');
  if (current_theme === 'dark'){
    console.log('Theme switched to light');
    current_theme = 'light';    
    themeIcon.setAttribute('name', 'sunny-outline');
    htmlTheme.setAttribute('data-theme', current_theme);
    
  }
  else if (current_theme === 'light'){
    console.log('Theme switched to dark');
    current_theme = 'dark';
    themeIcon.setAttribute('name', 'moon-outline');
    htmlTheme.setAttribute('data-theme', current_theme);
  }
}

 

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });


  
