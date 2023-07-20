import { drawHome } from "./pageLoad.js";
import { drawMenu } from "./menu.js";
import { clean } from "./clean.js";
import './styles.css';


drawHome();

const menu_tab = document.querySelector('#menu');
const home_tab = document.querySelector('#home');

menu_tab.addEventListener("click", () => {
    clean();
    drawMenu();
});

home_tab.addEventListener("click", () => {
    clean();
    drawHome();
})



