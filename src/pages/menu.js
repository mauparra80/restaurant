import pizzaImg from "../img/pizza.jpg";
import burgerImg from "../img/burger.jpg";
import spaghettiImg from "../img/spaghetti.jpg";
import sandwichImg from "../img/sandwhich.jpg";
import pancakesImg from "../img/pancakes.jpg";
import eggsImg from "../img/eggs.jpg";
import cakeImg from "../img/cake.jpg";
import lavaCakeImg from "../img/lavaCake.jpg";
// import cocktailImg from "../img/cocktail.webp";
// import orangeJuiceImg from "../img/orangeJuice.webp";


//supporting function to create item with dish,descripiton, img
const createItem = function(dish, description, dishImage) 
{
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    
    const itemWritten = document.createElement("div");
    itemWritten.classList.add("item-written");
    itemContainer.appendChild(itemWritten);

    const dishH3 = document.createElement("h3");
    dishH3.textContent = dish;
    const descriptionP = document.createElement("p");
    descriptionP.textContent = description;
    itemWritten.appendChild(dishH3);
    itemWritten.appendChild(descriptionP);

    const line = document.createElement("div");
    line.classList.add("item-line");
    itemContainer.appendChild(line);

    const image = document.createElement("img");
    image.classList.add("item-picture");
    image.src = dishImage;
    itemContainer.appendChild(image);

    return itemContainer;
}

//supporting function to create Section with title
const createSection = function(title) 
{
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    
    const menuTitle = document.createElement("h2");
    menuTitle.id = "menu-title";
    menuTitle.textContent=title;
    menuSection.appendChild(menuTitle);

    return menuSection;
}



const menu = function() 
{
    /*
    newItem = createItem("", "", );
    newSection.appendChild(newItem);
    content.appendChild(newSection);
    */

    const content = document.querySelector(".content")

    const menuPage = document.createElement("div");
    menuPage.id = "menupage";
    content.appendChild(menuPage);

    const menuPageTitle = document.createElement("h1")
    menuPageTitle.textContent = "Menu";
    menuPageTitle.id= "menupage-title";
    menuPage.appendChild(menuPageTitle);

    let newSection = createSection("Breakfast")

    let newItem = createItem("Pancake Bliss", "Fluffy pancakes adorned with plump blueberries, a miniature delight for your taste buds.", pancakesImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Microscopic Morning Delight:", "Tiny sunny-side-up eggs, cooked to perfection, a pocket-sized breakfast sensation.", eggsImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newSection = createSection("Dinner")

    newItem = createItem("Pint-Sized Pizza Pleaser:", "A tiny pizza masterpiece, bursting with cheesy goodness and savory toppings.", pizzaImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Bite-sized Burger Bonanza:", "A mini burger sensation with a juicy patty, crisp lettuce, and a dollop of special sauce", burgerImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Tiny Twirl Spaghetti:", "Delicate swirls of spaghetti, coated in a rich tomato sauce, a tiny Italian feast.", spaghettiImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Itty-Bitty Sandwich Symphony:", "A petite sandwich orchestra of fresh ingredients, creating a harmonious medley of flavors.", sandwichImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newSection = createSection("Desert");

    newItem = createItem("Morsel of Carrot Cake Heaven:", "Mini carrot cake marvels, infused with spices and topped with a hint of creamy frosting.", cakeImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

    newItem = createItem("Lilliputian Chocolate Lava Indulgence:", "A diminutive chocolate lava cake, oozing with molten goodness, a sweet eruption in every bite.", lavaCakeImg);
    newSection.appendChild(newItem);
    menuPage.appendChild(newSection);

}

export default menu;