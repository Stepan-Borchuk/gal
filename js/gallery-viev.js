(() => {
    const refs = {
      openMenuBtn: document.querySelector('.gallery__list'),
      closeMenuBtn: document.querySelector('.gallery-close__btn'),
      menu: document.querySelector('.backdrop'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();