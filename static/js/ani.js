// document.querySelector('.links').onclick = animation.play();

// window.onload = function () {
//   if (localStorage.getItem("hasCodeRunBefore") === null) {
//       var textWrapper = document.querySelector('.load-text');
//       textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//       textWrapper.style.visibility = 'visible';
      
//       let loading = anime.timeline({
//         autoplay: true,
//         begin: function() {
//           document.querySelector('.loading').style.display = 'flex';
//         },
//       }).add({
//         targets: '.loading',
//         opacity: [0,1],
//         easing: "easeInOutQuad",
//         duration: 1500,
//         delay: (el, i) => 50 * (i+1)
//       }).add({
//         display: 'block',
//         targets: '.load-text .letter',
//         opacity: [0,1],
//         easing: "easeInOutQuad",
//         duration: 1500,
//         delay: (el, i) => 50 * (i+1)
//       }).add({
//         targets: '.load-text',
//         opacity: 0,
//         duration: 800,
//         easing: "easeOutExpo",
//         delay: 700
//       }).add ({
//         targets: '.loading',
//         duration: 2000,
//         opacity: 0,
//       }).add ({
//         delay: 50,
//         begin: function() {
//           document.querySelector('.loading').style.display = 'none';
//         },
//       });
//       localStorage.setItem("hasCodeRunBefore", true);
//   }
// }

// let morph = anime({
//     targets: '.svg',
//     autoplay: true,
//     points: [
//       { value: [
//         '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//         '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
//       },
//       { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//       { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
//       { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
//     ],
//     easing: 'easeOutQuad',
//     duration: 2000,
//     loop: true

// });

// let path = anime.path('#patho');

// let blob = anime({
//   targets: '.shape',
//   translateX: path('x'),
//   translateY: path('y'),
//   easing: 'linear',
//   duration: 5000,
//   loop: true,
//   autoplay: true
// });

var topBtn = document.querySelector('.topBtn');

function animateButton(rotation, duration) {
  anime.remove(topBtn);
  anime({
    targets: topBtn,
    rotate: rotation,
    duration: duration,
    easing: 'linear'
  });
}

function enterButton() { animateButton(360, 400) };
function leaveButton() { animateButton(0, 400) };

topBtn.addEventListener('mouseenter', enterButton, false);
topBtn.addEventListener('mouseleave', leaveButton, false);

function prev(e) {
  var pano = document.getElementById(e.id);
  // alert(e.src);
  anime({
    targets: pano,
    scale: 1.1,
    duration: 400,
    easing: 'easeInOutQuint'
  });
}
function hide(e) {
  var pano = document.getElementById(e.id);
  anime({
    targets: pano,
    opacity: 1,
    scale: 1.0,
    duration: 400,
    easing: 'easeInOutQuint'    
  });
}

function Modal(i) {
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal
    var img = i.id;
    var modalImg = document.getElementById("img01");
    modal.style.display = "flex";
    src = i.src;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var wimg = "1200";

    // Desktop + Large Screens
    if (width >= 1920) {
      finalsrc = src.replace(wimg,"1920");
      wimg = "1920";
    } 
    // iPad / iPad Pro
    if (width == 768) {
      finalsrc = src.replace(wimg,"768");
      wimg = "768";
    } 
    // iPhone X
    if (width == 375) {
      finalsrc = src.replace(wimg,"375");
      wimg = "375";
    } 
    // Retina
    if (width == 1366) {
      finalsrc = src.replace(wimg,"1366");
      wimg = "1366";
    }

      
    modalImg.src = finalsrc;

    anime({
      targets: modal,
      easing: 'linear',
      elasticity: 1000,
      duration: 500,
      begin: function() {
        modal.style.display = 'flex';
      },
      opacity: [0,1],
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      anime.timeline({
        targets: modal,
        easing: 'easeInOutQuad',
        duration: 350,

      }).add ({
        opacity: [1,0],
        // scale: [1,0],
      }).add ({
        delay: 200,
        begin: function() {
          modal.style.display = 'none';
        }
      })
    }
}