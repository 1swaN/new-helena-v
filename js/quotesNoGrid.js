window.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки ширины окна и добавления класса
    function checkWindowWidth() {
      var quotesBlock = document.querySelector('.quotes');
      if (window.innerWidth <= 600) {
        quotesBlock.classList.add('no-grid');
      } else {
        quotesBlock.classList.remove('no-grid');
      }
    }
  
    // Проверяем ширину окна при загрузке страницы
    checkWindowWidth();
  
    // Проверяем ширину окна при изменении размера окна
    window.addEventListener('resize', function() {
      checkWindowWidth();
    });
  });