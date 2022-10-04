const container = document.querySelector("#container");
const blueP = document.createElement("p");
blueP.style.color = "red";
blueP.textContent = "Hey iam red";

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "Hey iam blue";

const pinkDiv = document.createElement("div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "Iam in DIV";

const p = document.createElement("p");
p.textContent = "ME TOO";



container.appendChild(blueP);
container.appendChild(blueH3);
container.appendChild(pinkDiv);
pinkDiv.appendChild(h1);
pinkDiv.appendChild(p);