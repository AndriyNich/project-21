(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.body;e.addEventListener("click",(()=>{const a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.getAttribute("aria-expanded",!a),t.classList.toggle("is-open"),o.classList.toggle("modal-open")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-contact]"),closeModalBtn:document.querySelector("[data-modal-close-contact]"),modal:document.querySelector("[data-modal-contact]")};function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn2:document.querySelector("[data-modal-open-contact2]"),closeModalBtn2:document.querySelector("[data-modal-close-contact2]"),modal2:document.querySelector("[data-modal-contact2]")};function t(){e.modal2.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn2.addEventListener("click",t),e.closeModalBtn2.addEventListener("click",t)})(),new Swiper(".image-slider");
//# sourceMappingURL=accessories.b409d2c2.js.map
