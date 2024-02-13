import './about.css';

export function renderAbout() {
  let containDiv = document.createElement("div");
  containDiv.setAttribute("class", "contain-about-div");

  let heading = document.createElement('h1');
  let description = document.createElement('p');

  heading.textContent = 'Our Story'

  description.textContent = 'Founded by a team of passionate food enthusiasts and space aficionados, Cosmic Cravings was born out of a shared love for exploration and discovery. Inspired by the mysteries of the universe, we set out to create a space-themed eatery that would transport our guests to distant worlds while tantalizing their taste buds with flavors from across the cosmos.'

  containDiv.append(heading,description)

  

  return containDiv;
}
