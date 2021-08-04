function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Get objects
const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation');
const links = document.querySelectorAll('.nav-links');
const preview = document.getElementById('preview-img')

// Add class to change to X
async function toggleMenuIcon() {
    const navwidth = navigation.style.width;
    menuIcon.classList.toggle('active');
    navigation.classList.toggle('nav-animation');
    //await sleep(500);
    for (i = 0; i < links.length; i++) {
        links[i].classList.toggle('show-links');
    }
}
// function imgPreview(id) {
//     var src = document.getElementById(id).getAttribute('src');
//     var about = document.getElementById('about');
//     const img = document.getElementById(id);
//     var finalsrc =  '"' + "url('" + src + "')" + '"';
//     var mediawidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//     if (id == "mini_wash") {
//         if (mediawidth > "1000") {
//             preview.style.width = "50%";
//             preview.style.left = "25%";
//         }
//     } 
//     preview.style.backgroundImage = "url('" + src + "')";
//     preview.style.visibility = "visible";
//     preview.style.opacity = "1";
//     // preview.style.height = "100vh";
//     // preview.style.width = "100vw";
// }
// async function imgClose() {
//     imgwidth = document.getElementById('preview-img').offsetWidth;
//     imgclose = document.getElementById('preview-img');
//     preview.style.opacity = "0";
//     await sleep(400);
//     preview.style.visibility = "hidden";
//     if (imgwidth == "1012") {
//         preview.style.width = "100%";
//         preview.style.left = "0";
//     } 
//     // imgclose.style.height = "0vh";
//     // imgclose.style.width = "0vw";
// }

var mybutton = document.querySelector('.topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
menuIcon.addEventListener('click', toggleMenuIcon);

// const slider = document.querySelector(".gallery-container");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", e => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
// });