export function HomePage() {
  const divContent = document.querySelector("#content");
  const createDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  const mainContainer = createDiv.cloneNode(true);
  mainContainer.classList.add("main-container");
  divContent.appendChild(mainContainer);

  // restaurant name
  const divHeader = createDiv.cloneNode(true);
  divHeader.classList.add("header");

  h1.textContent = "Kuya Louie's Carenderia";
  mainContainer.appendChild(divHeader);
  divHeader.appendChild(h1);

  // about us
  const divAbout = createDiv.cloneNode(true);
  divAbout.classList.add("about-us");
  const aboutUsH2 = h2.cloneNode(true);
  aboutUsH2.textContent =
    "Taste the Flavor of the Nation: Filipino Cooking, Home Cooking";
  mainContainer.appendChild(divAbout);
  divAbout.appendChild(aboutUsH2);

  const divAbout1 = createDiv.cloneNode(true);
  divAbout1.classList.add("about-us");
  const aboutUsH3 = h3.cloneNode(true);
  aboutUsH3.textContent =
    "Kuya Louie's carenderia serves variety of Filipino home made dishes.";
  mainContainer.appendChild(divAbout1);
  divAbout1.appendChild(aboutUsH3);

  // add images here

  // history
  const historyContainer = createDiv.cloneNode(true);
  historyContainer.classList.add("history-container");
  mainContainer.appendChild(historyContainer);

  const historyH2 = h2.cloneNode(true);
  historyContainer.appendChild(historyH2);
  historyH2.textContent = "Kuya Louie's Carenderia: A Journey Through Time";

  // add images here

  const historyDiv = createDiv.cloneNode(true);
  historyDiv.classList.add("history-divs");
  historyContainer.appendChild(historyDiv);

  const historyH3 = h3.cloneNode(true);
  const historyPara = p.cloneNode(true);
  historyDiv.appendChild(historyH3);
  historyDiv.appendChild(historyPara);
  historyH3.textContent = "Early 2000s: The Birth of a Carenderia";
  historyPara.textContent =
    "Kuya Louie's Carenderia was founded in the early 2000s by Louie, a passionate cook with a dream to bring authentic Filipino cuisine to his community. Starting with a small stall in a bustling neighborhood, Louie's dedication to quality and flavor quickly earned him a loyal customer base.";

  const history1H3 = h3.cloneNode(true);
  const history1Para = p.cloneNode(true);
  historyDiv.appendChild(history1H3);
  historyDiv.appendChild(history1Para);
  history1H3.textContent = "2005: Expansion and Recognition";
  history1Para.textContent =
    "By 2005, Kuya Louie's Carenderia had expanded to a larger space, offering a wider variety of dishes. Louie's commitment to using fresh, locally-sourced ingredients set his carenderia apart from others. The carenderia gained recognition for its delicious and affordable meals, becoming a favorite spot for locals and visitors alike.";

  const history2H3 = h3.cloneNode(true);
  const history2Para = p.cloneNode(true);
  historyDiv.appendChild(history2H3);
  historyDiv.appendChild(history2Para);
  history2H3.textContent = "2010: Community Hub";
  history2Para.textContent =
    "In 2010, Kuya Louie's Carenderia became more than just a place to eat; it transformed into a community hub. Louie started hosting events such as cooking classes and cultural celebrations, fostering a sense of togetherness and pride in Filipino heritage. The carenderia also began supporting local farmers by sourcing produce directly from them.";

  const history3H3 = h3.cloneNode(true);
  const history3Para = p.cloneNode(true);
  historyDiv.appendChild(history3H3);
  historyDiv.appendChild(history3Para);
  history3H3.textContent = "2015: Modernization and Innovation";
  history3Para.textContent =
    "With the rise of social media, Kuya Louie's Carenderia embraced modern marketing techniques to reach a wider audience. Louie introduced new dishes inspired by traditional recipes, appealing to both nostalgic customers and adventurous foodies. The carenderia's popularity soared, attracting food bloggers and influencers.";

  const history4H3 = h3.cloneNode(true);
  const history4Para = p.cloneNode(true);
  historyDiv.appendChild(history4H3);
  historyDiv.appendChild(history4Para);
  history4H3.textContent = "2020: Overcoming Challenges";
  history4Para.textContent =
    "The COVID-19 pandemic posed significant challenges, but Kuya Louie's Carenderia adapted by offering delivery and take-out services. Louie's resilience and dedication to serving his community kept the carenderia afloat during tough times. The carenderia also participated in community relief efforts, providing meals to those in need.";

  const history5H3 = h3.cloneNode(true);
  const history5Para = p.cloneNode(true);
  historyDiv.appendChild(history5H3);
  historyDiv.appendChild(history5Para);
  history5H3.textContent = "Present Day: A Legacy of Flavor and Community";
  history5Para.textContent =
    "Today, Kuya Louie's Carenderia continues to thrive, celebrating over two decades of serving delicious Filipino food. Louie's legacy lives on through his commitment to quality, community, and innovation. The carenderia remains a beloved institution, cherished by all who walk through its doors.";
}
