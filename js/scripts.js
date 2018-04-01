// модальное окно обратной связи
var toggleModal = function (modal) {
  var modalElem = document.querySelector(modal);
  var overlay = document.querySelector(".modal-overlay");
  if (modalElem) {
    modalElem.classList.toggle("modal-hidden");
    if (overlay) overlay.classList.toggle("modal-hidden");
  }
}

document.getElementById("open-modal-feedback").onclick = toggleModal.bind(null, ".modal-feedback");
document.getElementById("close-modal-feedback").onclick = toggleModal.bind(null, ".modal-feedback");