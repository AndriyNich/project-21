'use strict';

(() => {
  const refs2 = {
    openModalBtn2: document.querySelector('[data-modal-open-contact2]'),
    closeModalBtn2: document.querySelector('[data-modal-close-contact2]'),
    modal2: document.querySelector('[data-modal-contact2]'),

    openModalBtn3: document.querySelector('[data-modal-open-contact3]'),
    // closeModalBtn3: document.querySelector('[data-modal-close-contact3]'),
    modal3: document.querySelector('[data-modal-contact3]'),

    openModalBtn4: document.querySelector('[data-modal-open-contact4]'),
    // closeModalBtn4: document.querySelector('[data-modal-close-contact4]'),
    modal4: document.querySelector('[data-modal-contact4]'),

    openModalBtn5: document.querySelector('[data-modal-open-contact5]'),
    // closeModalBtn5: document.querySelector('[data-modal-close-contact5]'),
    modal5: document.querySelector('[data-modal-contact5]'),
  };
  refs2.openModalBtn2.addEventListener('click', toggleModal2);
  refs2.closeModalBtn2.addEventListener('click', toggleModal2);
  refs2.openModalBtn3.addEventListener('click', toggleModal3);
  // refs2.closeModalBtn3.addEventListener('click', toggleModal3);

  refs2.openModalBtn4.addEventListener('click', toggleModal4);
  // refs2.closeModalBtn4.addEventListener('click', toggleModal4);

  refs2.openModalBtn5.addEventListener('click', toggleModal5);
  // refs2.closeModalBtn5.addEventListener('click', toggleModal5);

  function toggleModal2() {
    refs2.modal2.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }

  function toggleModal3() {
    refs2.modal3.classList.toggle('is-hidden-1');
    // document.body.classList.toggle('modal-open');
  }

  function toggleModal4() {
    refs2.modal4.classList.toggle('is-hidden-2');
    // document.body.classList.toggle('modal-open');
  }
  function toggleModal5() {
    refs2.modal5.classList.toggle('is-hidden-3');
    // document.body.classList.toggle('modal-open');
  }
})();
