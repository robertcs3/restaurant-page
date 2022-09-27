import { homePage } from './home';
import { menuPage } from './menu';
import './styles.css';
import './reset.css';




homePage();


const body = document.getElementById('body');
const home = document.getElementById('home-tab');
const menu = document.getElementById('menu-tab');
const content = document.getElementById('content');




const tabSwitch = (() => {
    home.addEventListener('click', () => {
        content.textContent = '';
        homePage();
    });
    
    menu.addEventListener('click', () => {
        body.textContent = '';
        menuPage();
    });
})();




export {tabSwitch};