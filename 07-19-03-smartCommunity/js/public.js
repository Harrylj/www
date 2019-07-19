(function(doc, win) {
  var docEl = doc.documentElement,
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      docEl.style.fontSize = clientWidth * (100 / 375) + 'px';
    };
  if(doc.addEventListener) {
    win.addEventListener('resize', recalc, false);
  } else {
    win.attachEvent('onresize', recalc);
  }
  recalc();
})(document, window);