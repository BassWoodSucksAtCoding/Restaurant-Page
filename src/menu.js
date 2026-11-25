import item1IMG from "./menu/potato-patties-topped-with-beef-patties-shoe-strings.jpg"
import item2IMG from "./menu/various-dessert-served-plate.jpg"
import item3IMG from "./menu/image3.jpg"
import item4IMG from "./menu/image4.jpg"
import item5IMG from "./menu/image5.jpg"
import item6IMG from "./menu/image6.jpg"

export default function createMenuTab() {
    const containerDiv = document.querySelector("#container");
    const title = document.createElement("h1");
    title.textContent = "Today's Special";
    containerDiv.appendChild(title);

    const menuGrid = document.createElement("grid");
    menuGrid.classList.add("menuGrid")
    containerDiv.appendChild(menuGrid);

    const item1 = document.createElement("img");
    item1.src = item1IMG;
    addCredit(item1, "https://www.magnific.com/free-photo/potato-patties-topped-with-beef-patties-shoe-strings_7268983.htm")

    const item2 = document.createElement("img");
    item2.src = item2IMG;
    addCredit(item2, "https://www.magnific.com/free-photo/various-dessert-served-plate_7104888.htm")

    const item3 = document.createElement("img");
    item3.src = item3IMG;
    addCredit(item3, "https://www.magnific.com/free-photo/fried-meat-served-with-tomato-sauce-smoked-cheese_7607798.htm")

    const item4 = document.createElement("img");
    item4.src = item4IMG;
    addCredit(item4, "https://www.magnific.com/free-photo/chicken-gardenblue-with-vegetables-plate_7135855.htm")

    const item5 = document.createElement("img");
    item5.src = item5IMG;
    addCredit(item5, "https://www.magnific.com/free-photo/brownie-with-cream-mandarin-slices_5588420.htm")

    const item6 = document.createElement("img");
    item6.src = item6IMG;
    addCredit(item6, "https://www.magnific.com/free-photo/kyev-style-chicken-cutlet-with-side-potato_6228042.htm")
}

function addCredit(item, creditLink) {
    const menuGrid = document.querySelector(".menuGrid");
    item.classList.add("hoverimg")
    item.addEventListener('click', event => {
        window.location.href = creditLink;
    })
    menuGrid.appendChild(item);
}