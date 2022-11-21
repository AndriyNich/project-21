'use strict';

(() => {
  const refs1 = {
    openModalBtn1: document.querySelector('[contact1-data-modal-open]'),
    closeModalBtn1: document.querySelector('[contact1-data-modal-close]'),
    modal1: document.querySelector('[contact1-data-modal]'),
  };
  refs1.openModalBtn1.addEventListener('click', toggleModal1);
  refs1.closeModalBtn1.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs1.modal1.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
