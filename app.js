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