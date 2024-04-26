document.querySelectorAll('.yollar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Varsayılan tıklama davranışını engelle
    const targetId = this.getAttribute('href').substring(1); // Bağlantının hedefini al
    const targetElement = document.getElementById(targetId); // Hedef elementi al
    if (targetElement) {
      // Hedef elementi sayfanın üstüne getir
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});