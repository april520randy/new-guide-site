(function () {
  var pageWidth = 390; //设计图宽度
  var docEl = document.documentElement;
  let vw = docEl.getBoundingClientRect().width;
  let maxWidth = 800
  if (vw > maxWidth) {
    vw = maxWidth;
  }
  var windowScale = function () {
    docEl.style.fontSize = vw / pageWidth + "px";
  };
  windowScale();
  window.onresize = windowScale;
})();
