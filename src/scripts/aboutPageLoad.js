import '../css/aboutPageStyle.css';

export default function aboutPageLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.style["align-content"] = "flex-start";

    const h2 = document.createElement("h2");
    h2.textContent = "About";

    const p = document.createElement("p");
    p.setAttribute("id", "definition");
    p.textContent = "\"Struggle meals\" are like magic tricks with food when you're low on cash. They're the go-to meals that make something yummy out of whatever's left in your kitchen. It's like turning leftovers into a delicious feast!";

    contentDiv.append(h2, p)
};