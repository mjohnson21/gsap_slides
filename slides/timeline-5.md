## Easily Chained
Chain the whole declaration together in one declaration, removing the TweenLite/Max declarations.
```
var timeline = new TimelineLite()
timeline.to(target, 2, {left: 300})
        .to(target, 1, {top: -150})
        .to(target, 1, {opacity: 0});
```
<h4>vs</h4>
```
var timeline = new TimelineLite()
timeline.add(TweenLite.to('#demoTl1', 1, {left: 300}));
timeline.add(TweenLite.to('#demoTl1', 1, {top: -150}));
timeline.add(TweenLite.to('#demoTl1', 1, {opacity: 0}));
```
