export default function createAboutTab() {
    const containerDiv = document.querySelector("#container");

    const subtitle = document.createElement("h1");
    subtitle.textContent = "Our Journey";
    containerDiv.appendChild(subtitle);

    const subcontent = document.createElement("p");
    subcontent.textContent = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque interdum dapibus orci ut posuere. Quisque non felis lorem. Aliquam gravida suscipit elit, quis egestas nisi vestibulum et. In luctus diam vel dictum semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ";
    subcontent.classList.add("centre");
    containerDiv.appendChild(subcontent);

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv")
    containerDiv.appendChild(contactDiv);

    const title = document.createElement("h2");
    title.textContent = "Contact us";
    contactDiv.appendChild(title);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add("buttonDiv")
    contactDiv.appendChild(buttonDiv);

    const repoButton = document.createElement('button');
    repoButton.textContent = "REPOSITORY";
    buttonDiv.appendChild(repoButton);

    const discordButton = document.createElement('button');
    discordButton.textContent = "DISCORD";
    buttonDiv.appendChild(discordButton);
}