import { createHome } from "./homePage";
import './style.css';

let root = document.querySelector('#content');

let homePage = createHome();

root.append(homePage)