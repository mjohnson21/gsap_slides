## Position: Labels
Different tweens can be named, then have their times targetted by other tweens.
```
var timeline = new TimelineLite();
timeline.to('#target-left', 3, {top: -300}, 'beginning')
   .to('#target-right', 1, {top: -300}, 'beginning+=1')
   .to('.demoTl3', 1, {opacity: 0, scale: 0});
```
<div class="demo cf">
    <div id="demoTl4-left" class="target demoTl4 black wide left">Left</div>
    <div id="demoTl4-right" class="target demoTl4 black wide right">Right</div>
</div>
<button class="btn" id="demoTl4-btn">play</button>
<button class="btn" id="demoTl4-btn-restart">restart</button>
