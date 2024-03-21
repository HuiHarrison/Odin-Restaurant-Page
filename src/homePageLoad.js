import './homePageStyle.css'
import Icon from './image.png';


export default function homePageLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Struggle Meals";

    const p = document.createElement("p");
    p.textContent = "The struggle is real, but it doesn't mean your food has to suffer.";
    
    // Add image
    const myIcon = new Image();
    myIcon.src = Icon;

    contentDiv.append(h1, p, myIcon);
};