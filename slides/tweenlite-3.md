##  TweenLite

A basic tween (animation) requires three things: target, duration, and an object containing the things that will change.

The `.to()` method tweens from the current css values of an element to the ones specified in `vars`.

```
TweenLite.to(target, duration, {vars});

TweenLite.to("#target", 1, {
  opacity:1
});
```
