let animation = anime ({
    target: '.container',
    duration: 500,
    easing: 'linear',
    left: '80%',
    // autoplay: false,
  });

// animation.add ({
//     targets: '.circle',
//     translateX: 900,
//     scale: 2,
//     borderRadius: 50,
// }).add ({
//     targets: '.circle',
//     translateX: 900,
//     translateY: 0,
//     scale: 1,
//     borderRadius: 50,
// }).add ({
//     targets: '.circle',
//     translateX: 1200,
//     translateY: 400,
//     scale: 2,
//     borderRadius: 50,
// }).add ({
//     targets: '.circle',
//     translateX: 500,
//     translateY: 100,
//     scale: 5,
//     borderRadius: 50,
// }).add ({
//     targets: '.circle',
//     translateX: 0,
//     translateY: 0,
//     scale: 1,
//     borderRadius: 50,
// });

// let welcome = anime.timeline ({
//     duration: 200,
//     easing: 'spring',
//   });

// welcome.add ({
//     targets: '.wel',
//     opacity: 1,
// }).add ({
//     targets: '.come',
//     opacity: 1,
// });


document.querySelector('.links').onclick = animation.play();