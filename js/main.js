// MODAL WRITE US

function writeUsShow(evt) {
  evt.preventDefault();
  document.getElementById("write-us-modal").style.display = "block";
  modalOverlay.style.display = "block";
}

function writeUsClose(evt) {
  evt.preventDefault();
  document.getElementById("write-us-modal").style.display = "none";
  modalOverlay.style.display = "none";
}

var modalOverlay = document.querySelector(".modal-overlay");

var writeUsModal = document.getElementById("write-us-modal-show");
writeUsModal.addEventListener("click", writeUsShow, true);

var writeUsCloseBtn = document.getElementById("write-us-close");
writeUsCloseBtn.addEventListener("click", writeUsClose, true);

// YANDEX MAP MODAL

function yandexMapShow(evt) {
  evt.preventDefault();
  document.getElementById("maps-modal").style.display = "block";
  modalOverlay.style.display = "block";
}

function yandexMapClose(evt) {
  evt.preventDefault();
  document.getElementById("maps-modal").style.display = "none";
  modalOverlay.style.display = "none";
}

var yandexMapModalBtn = document.getElementById("maps-modal-link");
yandexMapModalBtn.addEventListener("click", yandexMapShow, true);

var yandexMapModalCloseBtn = document.getElementById("maps-modal-close");
yandexMapModalCloseBtn.addEventListener("click", yandexMapClose, true);
