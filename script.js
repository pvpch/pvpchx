document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const sideMenu = document.getElementById('side-menu');
  const closeMenuBtn = document.getElementById('close-menu');

  const popup = document.getElementById('popup');
  const popupContent = popup.querySelector('p');
  const popupCloseBtn = document.getElementById('popup-close');

  // Открыть меню
  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  // Закрыть меню
  closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // Кнопки в меню открывают попап с текстом из data-info
  sideMenu.querySelectorAll('.minecraft-button').forEach(button => {
    button.addEventListener('click', () => {
      const info = button.getAttribute('data-info');
      popupContent.textContent = info;
      popup.classList.add('active');
      sideMenu.classList.remove('open'); // Закрываем меню при открытии попапа
    });
  });

  // Закрыть попап
  popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  // Закрыть попап по клику вне контента
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
});
