## The Basic Timeline


```
var timeline = new TimelineLite()
timeline.add(TweenLite.to('#demoTl1', 1, {left: 300}));
timeline.add(TweenLite.to('#demoTl1', 1, {top: -150}));
timeline.add(TweenLite.to('#demoTl1', 1, {opacity: 0}));
```
<div class="demo">
    <div id="demoTl1" class="target demoTl1 black wide">Timelined</div>
</div>
<button class="btn" id="demoTl1-btn">play</button>
<button class="btn" id="demoTl1-btn-restart">restart</button>
