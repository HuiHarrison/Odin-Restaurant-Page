import '../css/menuPageStyle.css';
import Hotdog from '../img/menu/hotdog.png';
import Pizza from '../img/menu/pizza.png';
import Burrito from '../img/menu/burrito.png';

export default function menuPageLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = "Menu";

    const ul = document.createElement("ul");

    // Hotdog
    const li1 = document.createElement("li");
    const hotdogImg = new Image();
    hotdogImg.src = Hotdog;
    hotdogImg.classList.add("food-image");
    const p1 = document.createElement("p");
    p1.textContent = "Hotdog";
    li1.append(hotdogImg, p1);

    // Pizza
    const li2 = document.createElement("li");
    const PizzaImg = new Image();
    PizzaImg.src = Pizza;
    PizzaImg.classList.add("food-image");
    const p2 = document.createElement("p");
    p2.textContent = "Pepperoni Pizza";
    li2.append(PizzaImg, p2);

    // Burrito
    const li3 = document.createElement("li");
    const BurritoImg = new Image();
    BurritoImg.src = Burrito;
    BurritoImg.classList.add("food-image");
    const p3 = document.createElement("p");
    p3.textContent = "Burrito";
    li3.append(BurritoImg, p3);

    ul.append(li1, li2, li3);

    contentDiv.append(h2, ul);
};