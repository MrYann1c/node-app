"use strict";

// document.querySelector('.links').onclick = animation.play();
// let shapes = [
//   {
//     d: "M257.03 245.78L366.56 245.78L366.56 351.41L257.03 351.41L257.03 245.78Z"
//   },
//   {
//     d: "M352.05 238.32L395.82 314.14L302.8 314.14L352.05 238.32Z"
//   }
// ]
// var morph = anime({
//     targets: '.morph-path1',
//     d: [
//         {value: shapes[0].d},
//         {value: shapes[1].d},
//     ],
//     duration: 5000,
//     direction: 'alternate',
//     autoplay: true,
//     easing: 'easeInOutElastic',
//     loop: true
// });
var textWrapper = document.querySelector('.load-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper.style.visibility = 'visible';
var loading = anime.timeline({
  autoplay: true
}).add({
  display: 'block',
  targets: '.load-text .letter',
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1500,
  delay: function delay(el, i) {
    return 50 * (i + 1);
  }
}).add({
  targets: '.load-text',
  opacity: 0,
  duration: 800,
  easing: "easeOutExpo",
  delay: 700
}).add({
  targets: '.loading',
  duration: 2000,
  opacity: 0
});