(function() {

  document.querySelectorAll("button[name^=social-]").forEach(function(ele, idx) {
    ele.addEventListener('click', function(evt) {
      window.open(ele.dataset.url, "_blank");
    }, false);
  });

})()
