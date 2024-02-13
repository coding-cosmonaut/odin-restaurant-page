import "./menu.css";

let menuItems = [
  {
    name: "Nebula Noodles",
    description:
      "Twisted pasta served with a creamy galactic sauce, sprinkled with stardust cheese.",
    price: 12.99,
    category: "Entrees",
  },
  {
    name: "Interstellar Burger",
    description:
      "A juicy beef patty topped with asteroid onions, comet cheese, and rocket sauce, served on a cosmic bun.",
    price: 14.99,
    category: "Entrees",
  },
  {
    name: "Galactic Salad",
    description:
      "A celestial mix of hydroponic greens, starfruit slices, and meteorite croutons, dressed in a tangy solar vinaigrette.",
    price: 9.99,
    category: "Salads",
  },
  {
    name: "Cosmic Calamari",
    description:
      "Crispy calamari rings lightly fried and served with a side of neutron star aioli.",
    price: 11.99,
    category: "Appetizers",
  },
];

export function renderMenu() {
  let menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "contain-menu-div");

  for (let i = 0; i < menuItems.length; i++) {
    let ul = document.createElement("ul");
    let nameLi = document.createElement("li");
    let desLi = document.createElement("li");
    let priceLi = document.createElement("li");

    (nameLi.textContent = menuItems[i].name),
      (desLi.textContent = menuItems[i].description),
      (priceLi.textContent = menuItems[i].price);

    ul.append(nameLi, desLi, priceLi);

    menuDiv.append(ul);
  }

  return menuDiv;
}
