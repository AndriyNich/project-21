'use strict';

(() => {
  const refs2 = {
    openModalBtn2: document.querySelector('[data-modal-open-contact2]'),
    closeModalBtn2: document.querySelector('[data-modal-close-contact2]'),
    modal2: document.querySelector('[data-modal-contact2]'),
  };
  refs2.openModalBtn2.addEventListener('click', toggleModal2);
  refs2.closeModalBtn2.addEventListener('click', toggleModal2);

  function toggleModal2() {
    refs2.modal2.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
