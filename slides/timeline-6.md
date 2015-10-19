## Position Parameter
The position perameter controls the time at which the tween will start.
```
var timeline = new TimelineLite();
timeline.to('#target-left', 3, {top: -300, background: 'red'})
   .to('#target-right', 1, {top: -300, background: 'blue'}, '-=1')
   .to('.demoTl3', 1, {opacity: 0, scale: 0});
```
<div class="demo cf">
    <div id="target-left" class="target demoTl3 black wide left">Left</div>
    <div id="target-right" class="target demoTl3 black wide right">Right</div>
</div>
<button class="btn" id="demoTl3-btn">play</button>
<button class="btn" id="demoTl3-btn-restart">restart</button>
