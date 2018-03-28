// MODAL WRITE US

function writeUsShow(evt) {
  evt.preventDefault();

  document.getElementById("write-us-modal").style.display = "block";
}

function writeUsClose(evt) {
  evt.preventDefault();
  document.getElementById("write-us-modal").style.display = "none";
}

var writeUsModal = document.getElementById("write-us-modal-show");
writeUsModal.addEventListener("click", writeUsShow, true);

var writeUsCloseBtn = document.getElementById("write-us-close");
writeUsCloseBtn.addEventListener("click", writeUsClose, true);

// YANDEX MAP MODAL

function yandexMapShow(evt) {
  evt.preventDefault();
  document.getElementById("maps-modal").style.display = "block";
}

function yandexMapClose(evt) {
  evt.preventDefault();
  document.getElementById("maps-modal").style.display = "none";
}

var yandexMapModalBtn = document.getElementById("maps-modal-link");
yandexMapModalBtn.addEventListener("click", yandexMapShow, true);

var yandexMapModalCloseBtn = document.getElementById("maps-modal-close");
yandexMapModalCloseBtn.addEventListener("click", yandexMapClose, true);
