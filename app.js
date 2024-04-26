document.addEventListener("DOMContentLoaded", function() {
  var hakkimdaLink = document.querySelector(".yollar li:nth-child(2) a");
  var yeteneklerLink = document.querySelector(".yollar li:nth-child(3) a");
  var projelerLink = document.querySelector(".yollar li:nth-child(4) a");
  var hakkimdaBolgesi = document.querySelector(".hakkimda");
  var yeteneklerBolgesi = document.querySelector(".yetenek-text");
  var projelerBolgesi = document.querySelector(".projeler");

  hakkimdaLink.addEventListener("click", function(event) {
    event.preventDefault();
    var hakkimdaBolgePos = hakkimdaBolgesi.offsetTop;
    window.scrollTo({
      top: hakkimdaBolgePos,
      behavior: "smooth"
    });
  });

  yeteneklerLink.addEventListener("click", function(event) {
    event.preventDefault();
    var yeteneklerBolgePos = yeteneklerBolgesi.offsetTop;
    window.scrollTo({
      top: yeteneklerBolgePos,
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