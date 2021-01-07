(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
 const isDrawerOpen = refs.drawer.classList.contains("is-open");
  const method = isDrawerOpen ? "disableBodyScroll" : "enableBodyScroll";
  bodyScrollLock[method](refs.drawerOverlay);