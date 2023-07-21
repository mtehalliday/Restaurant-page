import { drawHome } from "./pageLoad.js";
import { drawMenu } from "./menu.js";
import { clean } from "./clean.js";
import './styles.css';
import { drawContact } from "./contact.js";


drawHome();
clean();
drawContact();

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



