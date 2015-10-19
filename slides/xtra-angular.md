<h2>GreenSock in Angular</h2>

```
angular.module('AppAnimations', [])
  .animation('list-in', ['$window',function($window) {
    return {
      setup: function(element) {
        TweenMax.set(element, {opacity:0, width:0});
      },
      start : function(element, done) {
        TweenMax.to(element, 0.5, {opacity:1, width:210});
      }
    }
  }])
```

<a href="http://www.yearofmoo.com/2013/05/enhanced-animations-in-angularjs.html">Year of Moo: Matias Niemelä</a>

<a href="https://devchat.tv/adventures-in-angular/052-aia-web-based-animations-with-jack-doyle-of-greensock">Adventures in Angular Podcast</a>
