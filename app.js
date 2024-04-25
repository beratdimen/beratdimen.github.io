document.addEventListener("DOMContentLoaded", function() {
  var projelerLinkleri = document.querySelectorAll(".yollar li:nth-child(3) a");
  var projelerBolgesi = document.querySelector(".projeler");

  projelerLinkleri.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var projelerBolgePos = projelerBolgesi.offsetTop;
      window.scrollTo({
        top: projelerBolgePos,
        behavior: "smooth"
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var hakkimdaLink = document.querySelector(".yollar li:nth-child(2) a");
  var hakkimdaBolgesi = document.querySelector(".hakkimda");

  hakkimdaLink.addEventListener("click", function(event) {
    event.preventDefault();
    var hakkimdaBolgePos = hakkimdaBolgesi.offsetTop;
    window.scrollTo({
      top: hakkimdaBolgePos,
      behavior: "smooth"
    });
  });
});