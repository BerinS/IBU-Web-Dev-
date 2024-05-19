// ========================================================================= //
//  Typing effect
// ========================================================================= //

var i = 0;
var txt1 = 'Welcome to my site.'; 
var speed = 40;

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


