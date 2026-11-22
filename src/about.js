export default function createAboutTab() {
    const containerDiv = document.querySelector("#container");

    const title = document.createElement("h2");
    title.textContent = "----------- About Us --------------";
    containerDiv.appendChild(title);

    const subcontent = document.createElement("p");
    subcontent.textContent = "Integer nec nisi molestie, auctor eros ut, aliquam dolor. Proin varius ante sit amet massa consequat viverra. Proin nec magna velit. Proin condimentum ornare enim, venenatis pellentesque erat vehicula ac. Aenean purus nulla, egestas eget pharetra ut, vehicula id augue. Curabitur vehicula dui consectetur auctor aliquam. Praesent iaculis odio sed ullamcorper gravida. Nullam vitae nulla vitae velit tincidunt gravida. Sed pharetra semper massa, vitae molestie sapien consectetur dignissim. Fusce lobortis magna ac sagittis consectetur.";
    containerDiv.appendChild(subcontent);
}