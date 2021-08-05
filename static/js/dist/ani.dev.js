"use strict";

var animation = anime.timeline({
  duration: 2000,
  loop: true,
  easing: 'spring',
  direction: 'alternative'
});
animation.add({
  targets: '.circle',
  translateX: 900,
  scale: 2,
  borderRadius: 50
}).add({
  targets: '.circle',
  translateX: 900,
  translateY: 0,
  scale: 1,
  borderRadius: 50
}).add({
  targets: '.circle',
  translateX: 1200,
  translateY: 400,
  scale: 2,
  borderRadius: 50
}).add({
  targets: '.circle',
  translateX: 500,
  translateY: 100,
  scale: 5,
  borderRadius: 50
}).add({
  targets: '.circle',
  translateX: 0,
  translateY: 0,
  scale: 1,
  borderRadius: 50
});