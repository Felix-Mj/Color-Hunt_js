const newbgcolr = document.querySelector("#bgccolor");

for (let i = 0; i <= 35; i++) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const spancreate = document.createElement("span");
  const divcreate = document.createElement("div");
  divcreate.style.backgroundColor = "#" + randomColor;
  divcreate.setAttribute("class", "box");
  divcreate.addEventListener("click", () => {
    navigator.clipboard.writeText(randomColor);
    alert("Copied the text: " + randomColor);
  });
  divcreate.append(spancreate);
  spancreate.innerText = "#" + randomColor;
  newbgcolr.appendChild(divcreate);
}
