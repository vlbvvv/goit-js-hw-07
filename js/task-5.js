const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
