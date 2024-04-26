document.addEventListener("DOMContentLoaded", function() {
  var hakkimdaLink = document.querySelector(".yollar li:nth-child(2) a");
  var projelerLink = document.querySelector(".yollar li:nth-child(4) a");
  var hakkimdaBolgesi = document.querySelector(".hakkimda");
  var projelerBolgesi = document.querySelector(".projeler");

  hakkimdaLink.addEventListener("click", function(event) {
    event.preventDefault();
    var hakkimdaBolgePos = hakkimdaBolgesi.offsetTop;
    window.scrollTo({
      top: hakkimdaBolgePos,
      behavior: "smooth"
    });
  });

  projelerLink.addEventListener("click", function(event) {
    event.preventDefault();
    var projelerBolgePos = projelerBolgesi.offsetTop;
    window.scrollTo({
      top: projelerBolgePos,
      behavior: "smooth"
    });
  });
});