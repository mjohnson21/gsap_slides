##  TweenLite Selectors
Elements can be targetted in many ways. GSAP has it's own selection system, but will recognized other methods.
```
TweenLite.to("#target", 1, {opacity:1});

// vanilla
TweenLite.to(document.getElementById("target"), 1, {opacity:1});

// vanilla var
var target = document.getElementById("target");

// jQuery
TweenLite.to($("#target"), 1, {opacity:1});

```

