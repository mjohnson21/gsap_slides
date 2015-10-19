## Seek to Label
By using a label and the .seek() method, we can start the timeline at a certain position.
```
var timeline = new TimelineLite();
timeline..to('#target-left', 3, {top: -300})
   .to('#target-right', 1, {top: -300}, 0)
   .to('.targets', 1, {opacity: 0, scale: 0}, 'exit');

timeline.seek('exit');
```
<div class="demo cf">
    <div id="demoTl6-left" class="target demoTl6 black wide left">Left</div>
    <div id="demoTl6-right" class="target demoTl6 black wide right">Right</div>
</div>
<button class="btn" id="demoTl6-btn">seek('exit')</button>
