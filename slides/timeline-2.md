## Delays Can Work

Chaining animations with delays can get the job done, but at the cost of maintainability and modularity.

```
TweenLite.to('#demoDelay', 1, {left:300});
TweenLite.to('#demoDelay', 1, {top:-150, delay:1});
TweenLite.to('#demoDelay', 1, {opacity:0, delay:2});
```
<div class="demo">
    <div id="demoDelay" class="target demoDelay black wide">Delays</div>
</div>
<button class="btn" id="demoDelay-btn">fwd!</button>
