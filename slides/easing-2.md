## Easing

```
TweenLite.fromTo('#demoEase-target-1', 2, { x: 0 }, { x: 700,
  ease: Power1.easeInOut
});
```

<div class="demo">
    <div id="demoEase-target-1" class="target black small wide">Power1</div>
    <div id="demoEase-target-2" class="target black small wide">Circ</div>
    <div id="demoEase-target-3" class="target black small wide">Bounce</div>
    <div id="demoEase-target-4" class="target black small wide">Elastic</div>
    <div id="demoEase-target-5" class="target black small wide">Sine</div>
    <div id="demoEase-target-6" class="target black small wide">Expo</div>
</div>
<button class="btn" id="demoEase-btn">play()</button>
