
(function(doc, win) {
  var docEl = doc.documentElement,
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      docEl.style.fontSize = clientWidth * (100 / 750) + 'px';
    };
  if(doc.addEventListener) {
    win.addEventListener('resize', recalc, false);
  } else {
    win.attachEvent('onresize', recalc);
  }
  
  recalc();
})(document, window);


/*
(function () {
            // debugger;
            var baseFontSize = 100;
            var baseWidth = 320;
            var clientWidth = document.documentElement.clientWidth || window.innerWidth;
            var innerWidth = Math.max(Math.min(clientWidth, 480), 320);
            var rem = 100;
            if (innerWidth > 220 && innerWidth <= 375) {
                rem = Math.floor(innerWidth / baseWidth * baseFontSize);
            }
            if (innerWidth > 375) {
                rem = Math.floor(innerWidth / baseWidth * baseFontSize);
            }
            rem = rem*2
            window.__baseREM = rem;
            document.querySelector('html').style.fontSize = rem + 'px';
        }());
        
*/