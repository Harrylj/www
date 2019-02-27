//    Timeline.js
//    (c) 2010-2011
//    Timeline.js may be freely distributed under the MIT license.

(function(context) {

  var cache = [];

  var timeline = {};

  // Add animation object which requires start, stop and callback { start: 0, stop: 0.4, callback: function() {} }
  timeline.add = function(animation) {

    // Cache of all animations
    cache.push(animation);

    return this;
  };

  timeline.remove = function(animation) {

    var index = cache.indexOf(animation);

    if (index !== -1) {
      cache.splice(index, 1);
    }

    return this;
  };

  timeline.run = function(time) {

    function animate() {

      var l = cache.length;

      for(var i = 0; i < l; i++) {

        var animation = cache[i],
            _relativeTime = relativeTime(animation.start, animation.stop),
            repeat = animation.previousTime === _relativeTime;

        // Run animation if not a repeat of last update
        if (!repeat) animation.callback(_relativeTime);

        // Cache previous time
        animation.previousTime = _relativeTime;
      }

      return this;
    }

    function relativeTime(start, stop) {
      var length = stop - start,
          position = time - start,
          _relativeTime = position / length;

      ret = _relativeTime >= 1 ? 1 :
            _relativeTime <= 0 ? 0 : _relativeTime;

      return ret;
    }

    animate();

    return this;

  };

  timeline.Easing = {
    Cubic: {
      EaseIn: function ( k ) {
        return k * k * k;
      },
      EaseOut: function ( k ) {
        return --k * k * k + 1;
      },
      EaseInOut: function ( k ) {
        if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
        return 0.5 * ( ( k -= 2 ) * k * k + 2 );
      }
    }
  };

  context.timeline = timeline;

}(this));