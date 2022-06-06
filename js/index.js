function activeHeading() {
  let heading = document.querySelector("h2");
  heading.innerHTML = "GitHub is working";
}
let button = document.querySelector("button");
button.addEventListener("click", activeHeading);
