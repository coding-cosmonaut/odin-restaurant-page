import "./homePage.css";

export function createHome() {
  let containDiv = document.createElement("div");
  containDiv.setAttribute("class", "contain-div");

  let backgroundImg = document.createElement("img");
  let heading = document.createElement("h1");
  heading.textContent = "Outer Delights";
  containDiv.append(backgroundImg, heading);

  return containDiv;
}
