const btn = document.getElementById("btn");
const hexColor = document.getElementById("hexColor");

const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener("click", () => {
  hexColor.innerHTML = randomColor();
  hexColor.style.color = hexColor.innerHTML;
  btn.style.backgroundColor = hexColor.innerHTML
  document.body.style.backgroundColor = hexColor.innerHTML;
});

function randomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * colors.length)];
  }

  return color;
}

