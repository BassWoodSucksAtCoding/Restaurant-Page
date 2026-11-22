import "./styles.css";
import "./reset.css";

import createHomeTab from "./home.js";
import createAboutTab from "./about.js"

createHomeTab();

const navList = document.querySelectorAll("nav");
navList.forEach((navElement, index) => {

    navElement.addEventListener('mouseenter' , event => {
        event.target.style.fontWeight = 1000;
    })

    navElement.addEventListener('mouseleave' , event => {
        event.target.style.fontWeight = 400;
    })

    navElement.addEventListener('click', event => {
        const containerDiv = document.querySelector("#container");
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.lastChild);
        }

        if (navElement.id === "home") {
            createHomeTab();
        } else if (navElement.id === "about") {
            createAboutTab();
        }
    })
});
