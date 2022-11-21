'use strict';

(() => {
  const refs2 = {
    openModalBtn2: document.querySelector('[contact2-data-modal-open]'),
    closeModalBtn2: document.querySelector('[contact2-data-modal-close]'),
    modal2: document.querySelector('[contact2-data-modal]'),
  };
  refs2.openModalBtn2.addEventListener('click', toggleModal2);
  refs2.closeModalBtn2.addEventListener('click', toggleModal2);

  function toggleModal2() {
    refs2.modal2.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
