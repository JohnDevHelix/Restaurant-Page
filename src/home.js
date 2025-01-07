export default function HomePage() {
  const divContent = document.querySelector("#content");
  const createDiv = document.createElement("div");

  // restaurant name
  const divHeader = createDiv.cloneNode(true);
  divHeader.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Kuya Louie's Carenderia";
  divContent.appendChild(divHeader);
  divHeader.appendChild(h1);

  // about us
  const divAbout = createDiv.cloneNode(true);
  divAbout.classList.add("about-us");
  const h2 = document.createElement("h2");
  h2.textContent =
    "Kuya Louie's carenderia serves variety of Filipino home made dishes.";
  divContent.appendChild(divAbout);
  divAbout.appendChild(h2);
}

HomePage();
