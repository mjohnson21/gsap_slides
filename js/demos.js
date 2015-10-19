
$(document).ready(function () {

  var demos = {};

  demos.demo1 = TweenLite.to('#demo1-target', 1, {
    backgroundColor: 'blue',
    left: 400,
    paused: true
  });
  $('#demo1-btn').click(function () {
    console.log('ping');
    demos.demo1.play();
  });
  $('#demo1-btn-r').click(function () {
    demos.demo1.reverse();
  });





  demos.demo2 = new TweenLite.to('#demo2-target', 1, {
    backgroundColor: 'blue',
    left: 400,
    border: '5px solid red',
    paused: true
  });
  $('#demo2-btn').click(function () {
    demos.demo2.play();
  });
  $('#demo2-btn-r').click(function () {
    demos.demo2.reverse();
  });





  $('#demo3-btn').click(function () {
    TweenLite.from('#demo3-target', 1, {
      backgroundColor: 'blue',
      left: 400
    });
  });






  $('#demo4-btn').click(function () {
    TweenLite.fromTo('#demo4-target', 1, {
      backgroundColor: 'blue',
      left: 0
    }, {
      backgroundColor: 'red',
      left: 800
    });
  });





  $('#demo5-btn').click(function () {
    TweenLite.fromTo('#demo5-target', 1, {
      x: 0,
      y: 0,
      z: 0,
      rotation: 0
    }, {
      x: 400,
      y: -200,
      z: -400,
      rotation: 360
    });
  });





  $('#demo6-btn').click(function () {
    TweenLite.fromTo('.demo6-target', 1, {
      x: 0,
      rotation: 0
    }, {
      x: 400,
      rotation: 360
    });
  });





  demos.demo7 = TweenLite.fromTo('.demo7-target', 3, {
    x: 0,
    rotation: 0,
    paused: true
  }, {
    x: 700,
    rotation: 360
  });
  $('#demo7-btn').click(function () {
    demos.demo7.restart();
  });
  $('#demo7-btn-pause').click(function () {
    demos.demo7.pause();
  });
  $('#demo7-btn-play').click(function () {
    demos.demo7.play();
  });
  $('#demo7-btn-reverse').click(function () {
    demos.demo7.reverse();
  });




  $('#demo8-btn-r').click(function () {
    TweenLite.to("#demo8-target", 0.5, {
      x: '+=200',
      rotation: '+=180'
    });
  });
  $('#demo8-btn-l').click(function () {
    TweenLite.to("#demo8-target", 0.5, {
      x: '-=200',
      rotation: '-=180'
    });
  });




  $('#demoEase-btn').click(function () {
    console.log('ping');
    TweenLite.fromTo('#demoEase-target-1', 2, { x: 0 }, { x: 700,
      ease: Power1.easeInOut
    });
    TweenLite.fromTo('#demoEase-target-2', 2, { x: 0 }, { x: 700,
      ease: Circ.easeInOut
    });
    TweenLite.fromTo('#demoEase-target-3', 2, { x: 0 }, { x: 700,
      ease: Bounce.easeInOut
    });
    TweenLite.fromTo('#demoEase-target-4', 2, { x: 0 }, { x: 700,
      ease: Elastic.easeInOut
    });
    TweenLite.fromTo('#demoEase-target-5', 2, { x: 0 }, { x: 700,
      ease: Sine.easeInOut
    });
    TweenLite.fromTo('#demoEase-target-6', 2, { x: 0 }, { x: 700,
      ease: Expo.easeInOut
    });
  });





// =====================================================
// TweenMax
// =====================================================

  $('#demoStagger-btn').click(function () {
    TweenMax.staggerFromTo('.demoStagger', 2, { x: 0 }, { x: 720 }, 0.5);
  });

  $('#demoRepeat-btn').click(function () {
    TweenMax.to('.demoRepeat', 1, { x: 700, repeat: 5 });
  });

  $('#demoYoyo-btn').click(function () {
    TweenMax.to('.demoYoyo', 1, { x: 700, repeat: 7, yoyo: true });
  });

  $('#demoCombined-btn').click(function () {
    TweenMax.staggerFromTo('.demoCombined', 1, { x: 0 }, { x: 700, repeat: 7, yoyo: true }, 0.25);
  });





// =====================================================
// Timeline
// =====================================================

  $('#demoDelay-btn').click(function () {
    TweenLite.to('#demoDelay', 1, {x: 300});
    TweenLite.to('#demoDelay', 1, {y: -150, delay: 1});
    TweenLite.to('#demoDelay', 1, {opacity: 0, delay: 2});
  });




  var timeline = new TimelineLite();
  $('#demoTl1-btn').click(function () {
    timeline.add(TweenLite.to('#demoTl1', 1, {x: 300}));
    timeline.add(TweenLite.to('#demoTl1', 1, {y: -150}));
    timeline.add(TweenLite.to('#demoTl1', 1, {opacity: 0}));
  });
  $('#demoTl1-btn-restart').click(function () {
    timeline.restart();
  });





  var tl2 = new TimelineLite();
  $('#demoTl2-btn').click(function () {
    tl2.add(TweenLite.to('#demoTl2', 2, {y: -150}));
    tl2.add(TweenLite.to('#demoTl2', 1, {x: 300, delay: 0.5}));
    tl2.add(TweenLite.to('#demoTl2', 1, {opacity: 0}));
  });
  $('#demoTl2-btn-restart').click(function () {
    tl2.restart();
  });






  var tl3 = new TimelineLite();
  $('#demoTl3-btn').click(function () {
    tl3.to('#target-left', 2, {y: -300, backgroundColor: 'red'})
       .to('#target-right', 1, {y: -300, backgroundColor: 'blue'}, '-=1')
       .to('.demoTl3', 1, {opacity: 0, scale: 0});
  });
  $('#demoTl3-btn-restart').click(function () {
    tl3.restart();
  });






  var tl4 = new TimelineLite();
  $('#demoTl4-btn').click(function () {
    tl4.to('#demoTl4-left', 3, {y: -300, backgroundColor: 'red'}, 'begin')
       .to('#demoTl4-right', 1, {y: -300, backgroundColor: 'blue'}, 'begin+=1')
       .to('.demoTl4', 1, {opacity: 0, scale: 0});
  });
  $('#demoTl4-btn-restart').click(function () {
    tl4.restart();
  });






  var tl5 = new TimelineLite();
  $('#demoTl5-btn').click(function () {
    tl5.to('#demoTl5-left', 3, {y: -300, backgroundColor: 'red'})
       .to('#demoTl5-right', 1, {y: -300, backgroundColor: 'blue'}, 0)
       .to('.demoTl5', 1, {opacity: 0, scale: 0}, 1);
  });
  $('#demoTl5-btn-restart').click(function () {
    tl5.restart();
  });






  var tl6 = new TimelineLite();
  $('#demoTl6-btn').click(function () {
    tl6.to('#demoTl6-left', 3, {y: -300, backgroundColor: 'red'})
       .to('#demoTl6-right', 1, {y: -300, backgroundColor: 'blue'}, 0)
       .to('.demoTl6', 1, {opacity: 0, scale: 0}, 'exit');
    tl6.seek('exit');
  });









});











