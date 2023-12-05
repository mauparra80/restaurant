import './styles/home.css';
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import clear from "./functions/clear";

console.log("Everything is working");

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const contactButton = document.querySelector("#contactBtn");

clear();
home();

homeButton.addEventListener('click', (event) => {
    console.log("click on home");
    event.preventDefault();
    clear();
    home();
    
});

menuButton.addEventListener('click', (event) => {
    console.log("click on menu");
    event.preventDefault();
    clear();
    menu();
});

contactButton.addEventListener('click', (event) => {
    console.log("click on menu");
    event.preventDefault();
    clear();
    contact();
});



