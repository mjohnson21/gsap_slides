## Easily Adjusted
No need to adjust multiple delays when one animation gets updated.
```
var timeline = new TimelineLite()
timeline.add(TweenLite.to(target, 2, {top: -150}));
timeline.add(TweenLite.to(target, 1, {left: 300, delay: 0.5}));
timeline.add(TweenLite.to(target, 1, {opacity: 0}));
```
<div class="demo">
    <div id="demoTl2" class="target demoTl2 black wide">Timelined</div>
</div>
<button class="btn" id="demoTl2-btn">play</button>
<button class="btn" id="demoTl2-btn-restart">restart</button>
