const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = [
  "Closeup of a human eye",
  "Old stone",
  "Flowers",
  "Ancient Egypt art",
  "Butterfly",
];

/* Looping through images */

for (let i = 0; i < pictures.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${pictures[i]}`);
  newImage.setAttribute("alt", altTexts[i]);
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (event) => {
  const picFile = event.target.getAttribute("src");
  const picAlt = event.target.getAttribute("alt");
  displayedImage.setAttribute("src", picFile);
  displayedImage.setAttribute("alt", picAlt);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
