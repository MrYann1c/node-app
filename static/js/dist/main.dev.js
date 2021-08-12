"use strict";

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} // Get objects


var menuIcon = document.querySelector('.menu-icon');
var navigation = document.querySelector('.navigation');
var links = document.querySelectorAll('.nav-links');
var preview = document.getElementById('preview-img');
var container = document.querySelector('.container'); // Add class to change to X

function toggleMenuIcon() {
  var navwidth;
  return regeneratorRuntime.async(function toggleMenuIcon$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          navwidth = navigation.style.width;
          menuIcon.classList.toggle('active');
          navigation.classList.toggle('nav-animation');
          container.classList.toggle('fixed');

          for (i = 0; i < links.length; i++) {
            links[i].classList.toggle('show-links');
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

var mybutton = document.querySelector('.topBtn'); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "0.8";
    mybutton.style.right = "30px";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
    mybutton.style.right = "-30px";
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

menuIcon.addEventListener('click', toggleMenuIcon);