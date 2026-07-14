import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

const overlayHair = document.getElementById("overlayHair");

const overlayBtn = document.getElementById("overlayBtn");
const offBtn = document.getElementById("offBtn");


overlayBtn.onclick = () => {
  overlayHair.style.display = "block";
};


offBtn.onclick = () => {
  overlayHair.style.display = "none";
};
