// MODAL WRITE US

function writeUsShow(evt) {
  evt.preventDefault();
  writeUsModal.style.display = "block";
  modalOverlay.style.display = "block";
  document.getElementById("modal-user-name").focus();
}

function writeUsClose(evt) {
  evt.preventDefault();
  writeUsModal.style.display = "none";
  modalOverlay.style.display = "none";
}

var writeUsModal = document.getElementById("write-us-modal");
var modalOverlay = document.querySelector(".modal-overlay");
var writeUsModalBtn = document.getElementById("write-us-modal-show");
var writeUsCloseBtn = document.getElementById("write-us-close");

writeUsModalBtn.addEventListener("click", writeUsShow, true);
writeUsCloseBtn.addEventListener("click", writeUsClose, true);

// YANDEX MAP MODAL

function yandexMapShow(evt) {
  evt.preventDefault();
  yandexMapModal.style.display = "block";
  modalOverlay.style.display = "block";
}

function yandexMapClose(evt) {
  evt.preventDefault();
  yandexMapModal.style.display = "none";
  modalOverlay.style.display = "none";
}

var yandexMapModal = document.getElementById("maps-modal");
var yandexMapModalShowBtn = document.getElementById("maps-modal-link");
var yandexMapModalCloseBtn = document.getElementById("maps-modal-close");

yandexMapModalShowBtn.addEventListener("click", yandexMapShow, true);
yandexMapModalCloseBtn.addEventListener("click", yandexMapClose, true);
