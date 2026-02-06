function createDiv(width, height, text) {
  // get the container div
  const container = document.getElementById("container");

  // create a new div
  const newDiv = document.createElement("div");

  // set width and height with px
  newDiv.style.width = width + "px";
  newDiv.style.height = height + "px";

  // add text content
  newDiv.textContent = text;

  // optional: add border so div is visible
  newDiv.style.border = "1px solid black";

  // add the div inside container
  container.appendChild(newDiv);
}
