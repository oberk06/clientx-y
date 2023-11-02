const body = document.querySelector("body");
const divim = document.querySelector("div");
const bilgi = document.querySelector("span");

body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  body.style.backgroundColor = `rgb(${x},${y},${(x + y) / 10})`;

  bilgi.innerHTML = ` R-${x} || G-${x} || B-${x + y} `;
});
