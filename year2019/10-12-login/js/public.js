(function (doc, win) {
            var docEl = doc.documentElement,
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (clientWidth >= 414 && clientWidth <= 620) {
                       
                        docEl.style.fontSize = 50 * 1.2 + 'px';
                    }
                    else if (clientWidth > 620) {
                        docEl.style.fontSize = 50 * 1.3 + 'px';
                    }
                    else {
                        docEl.style.fontSize = clientWidth * (100 / 750) + 'px';
                    }
                };
            if (doc.addEventListener) {
                win.addEventListener('resize', recalc, false);
            } else {
                win.attachEvent('onresize', recalc);
            }
            recalc();
})(document, window);
/*
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

*/