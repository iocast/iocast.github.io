var last_known_scroll_position = 0;
var ticking = false;


var c = 0;
var currentScrollTop = 0;
var navbar = null;

function calcNavbarVisibility(scroll_pos) {
  var a = scroll_pos;
  // clientHeight includes padding.
  // offsetHeight includes padding, scrollBar and borders.
  var b = navbar.offsetHeight;

  currentScrollTop = a;

  if (c < currentScrollTop && a > b + b) {
    navbar.classList.add("scrollUp");
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.classList.remove("scrollUp");
  }
  c = currentScrollTop;
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      calcNavbarVisibility(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});


(function () {
  navbar = document.querySelector('div.fixed.menu');

  var tocList = document.querySelectorAll('a[href^="#"]');
  var selectedToc = null;

  tocList.forEach(function (ele) {
    
    ele.addEventListener('click', function (evt) {
      if (selectedToc !== null) selectedToc.classList.remove("bold");
      selectedToc = evt.srcElement;
      selectedToc.classList.add("bold");
    });

    if (window.location.hash === ele.hash) {
      selectedToc = ele;
      selectedToc.classList.add("bold");
      return;
    }
  });

})();
