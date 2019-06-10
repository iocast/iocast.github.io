
(function () {
  var tocList = document.querySelectorAll('a[href^="#"]');
  var selectedToc = null;

  tocList.forEach(function (ele) {

    ele.addEventListener('click', function (evt) {
      if(selectedToc !== null) selectedToc.classList.remove("bold");
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
