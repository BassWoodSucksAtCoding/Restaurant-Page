export default function createHomeTab() {
    const containerDiv = document.querySelector("#container");

    const title = document.createElement("h1");
    title.textContent = "BassWood\u00A0\u00A0\u00A0Bakery";
    containerDiv.appendChild(title);

    const subcontent = document.createElement("p");
    subcontent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a varius elit. Nam magna turpis, suscipit eget tellus eget, porta bibendum dolor. Nullam venenatis ultricies sapien, non convallis odio laoreet hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ";
    containerDiv.appendChild(subcontent);
}