const overlayHair = document.getElementById("overlayHair");

const overlayBtn = document.getElementById("overlayBtn");
const offBtn = document.getElementById("offBtn");


overlayBtn.onclick = () => {
  overlayHair.style.display = "block";
};


offBtn.onclick = () => {
  overlayHair.style.display = "none";
};
