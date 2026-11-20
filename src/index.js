import "./styles.css";
import "./reset.css";

const containerDiv = document.querySelector("#container");

const textDiv = document.createElement("div");
textDiv.setAttribute("id", "textDiv")
containerDiv.appendChild(textDiv);

const title = document.createElement("h1");
title.textContent = "pepepeooo";
textDiv.appendChild(title);