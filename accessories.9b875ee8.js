(()=>{const t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),o=document.body;t.addEventListener("click",(()=>{const a="true"===t.getAttribute("aria-expanded")||!1;t.classList.toggle("is-open"),t.getAttribute("aria-expanded",!a),e.classList.toggle("is-open"),o.classList.toggle("modal-open")}))})(),(()=>{const t={openModalBtn:document.querySelector("[contact-data-modal-open]"),closeModalBtn:document.querySelector("[contact-data-modal-close]"),modal:document.querySelector("[contact-data-modal]")};function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})(),(()=>{const t={openModalBtn2:document.querySelector("[contact2-data-modal-open]"),closeModalBtn2:document.querySelector("[contact2-data-modal-close]"),modal2:document.querySelector("[contact2-data-modal]")};function e(){t.modal2.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn2.addEventListener("click",e),t.closeModalBtn2.addEventListener("click",e)})();
//# sourceMappingURL=accessories.9b875ee8.js.map
