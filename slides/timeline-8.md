## Position: Absolute
By setting the Position Peramiter as a number, that tween will happen at that position in the timeline.
```
var timeline = new TimelineLite();
timeline.to('#target-left', 3, {top: -300})
   .to('#target-right', 1, {top: -300}, 0)
   .to('.demoTl3', 1, {opacity: 0, scale: 0}, 1);
```
<div class="demo cf">
    <div id="demoTl5-left" class="target demoTl5 black wide left">Left</div>
    <div id="demoTl5-right" class="target demoTl5 black wide right">Right</div>
</div>
<button class="btn" id="demoTl5-btn">play</button>
<button class="btn" id="demoTl5-btn-restart">restart</button>
