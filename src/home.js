export function HomePage() {
  const divContent = document.querySelector("#content");
  const createDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const img = document.createElement("img");

  const mainContainer = createDiv.cloneNode(true);
  mainContainer.classList.add("main-container");
  divContent.appendChild(mainContainer);

  // restaurant name
  const divHeader = createDiv.cloneNode(true);
  divHeader.classList.add("header");

  h1.textContent = "Kuya Louie's Carinderia";
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
    "Kuya Louie's carinderia serves variety of Filipino home made dishes.";
  mainContainer.appendChild(divAbout1);
  divAbout1.appendChild(aboutUsH3);

  // header images
  const divImages = createDiv.cloneNode(true);
  divImages.classList.add("images-container");
  mainContainer.appendChild(divImages);
  const img1 = img.cloneNode(true);
  img1.classList.add("header-images");
  img1.src = "./images/img.jpg";
  divImages.appendChild(img1);

  const img2 = img.cloneNode(true);
  img2.classList.add("header-images");
  img2.src = "./images/img2.jpg";
  divImages.appendChild(img2);

  const img3 = img.cloneNode(true);
  img3.classList.add("header-images");
  img3.src = "./images/img3.jpg";
  divImages.appendChild(img3);

  const img4 = img.cloneNode(true);
  img4.classList.add("header-images");
  img4.src = "./images/img4.jpg";
  divImages.appendChild(img4);

  const historyH2 = h2.cloneNode(true);
  mainContainer.appendChild(historyH2);
  historyH2.textContent = "Kuya Louie's Carinderia: A Journey Through Time";

  // history
  const historyContainer = createDiv.cloneNode(true);
  historyContainer.classList.add("history-container");
  mainContainer.appendChild(historyContainer);

  // history images
  const divImages1 = createDiv.cloneNode(true);
  divImages1.classList.add("historyImg-container");
  historyContainer.appendChild(divImages1);
  const history1 = img.cloneNode(true);
  history1.classList.add("history-images");
  history1.src = "./images/carinderia.png";
  divImages1.appendChild(history1);

  const history2 = img.cloneNode(true);
  history2.classList.add("history-images");
  history2.src = "./images/carinderia4.jpg";
  divImages1.appendChild(history2);

  const history3 = img.cloneNode(true);
  history3.classList.add("history-images");
  history3.src = "./images/carinderia2.jpg";
  divImages1.appendChild(history3);

  const history4 = img.cloneNode(true);
  history4.classList.add("history-images");
  history4.src = "./images/carinderia3.jpg";
  divImages1.appendChild(history4);

  const history5 = img.cloneNode(true);
  history5.classList.add("history-images");
  history5.src = "./images/carinderia1.jpg";
  divImages1.appendChild(history5);

  const historyDiv = createDiv.cloneNode(true);
  historyDiv.classList.add("history-divs");
  historyContainer.appendChild(historyDiv);

  const historyH3 = h3.cloneNode(true);
  const historyPara = p.cloneNode(true);
  historyDiv.appendChild(historyH3);
  historyDiv.appendChild(historyPara);
  historyH3.textContent = "Early 2000s: The Birth of a Carinderia";
  historyPara.textContent =
    "Kuya Louie's Carinderia was founded in the early 2000s by Louie, a passionate cook with a dream to bring authentic Filipino cuisine to his community. Starting with a small stall in a bustling neighborhood, Louie's dedication to quality and flavor quickly earned him a loyal customer base.";

  const history1H3 = h3.cloneNode(true);
  const history1Para = p.cloneNode(true);
  historyDiv.appendChild(history1H3);
  historyDiv.appendChild(history1Para);
  history1H3.textContent = "2005: Expansion and Recognition";
  history1Para.textContent =
    "By 2005, Kuya Louie's Carinderia had expanded to a larger space, offering a wider variety of dishes. Louie's commitment to using fresh, locally-sourced ingredients set his carinderia apart from others. The carinderia gained recognition for its delicious and affordable meals, becoming a favorite spot for locals and visitors alike.";

  const history2H3 = h3.cloneNode(true);
  const history2Para = p.cloneNode(true);
  historyDiv.appendChild(history2H3);
  historyDiv.appendChild(history2Para);
  history2H3.textContent = "2010: Community Hub";
  history2Para.textContent =
    "In 2010, Kuya Louie's Carinderia became more than just a place to eat; it transformed into a community hub. Louie started hosting events such as cooking classes and cultural celebrations, fostering a sense of togetherness and pride in Filipino heritage. The carinderia also began supporting local farmers by sourcing produce directly from them.";

  const history3H3 = h3.cloneNode(true);
  const history3Para = p.cloneNode(true);
  historyDiv.appendChild(history3H3);
  historyDiv.appendChild(history3Para);
  history3H3.textContent = "2015: Modernization and Innovation";
  history3Para.textContent =
    "With the rise of social media, Kuya Louie's Carinderia embraced modern marketing techniques to reach a wider audience. Louie introduced new dishes inspired by traditional recipes, appealing to both nostalgic customers and adventurous foodies. The carinderia's popularity soared, attracting food bloggers and influencers.";

  const history4H3 = h3.cloneNode(true);
  const history4Para = p.cloneNode(true);
  historyDiv.appendChild(history4H3);
  historyDiv.appendChild(history4Para);
  history4H3.textContent = "2020: Overcoming Challenges";
  history4Para.textContent =
    "The COVID-19 pandemic posed significant challenges, but Kuya Louie's Carinderia adapted by offering delivery and take-out services. Louie's resilience and dedication to serving his community kept the carinderia afloat during tough times. The carinderia also participated in community relief efforts, providing meals to those in need.";

  const history5H3 = h3.cloneNode(true);
  const history5Para = p.cloneNode(true);
  historyDiv.appendChild(history5H3);
  historyDiv.appendChild(history5Para);
  history5H3.textContent = "Present Day: A Legacy of Flavor and Community";
  history5Para.textContent =
    "Today, Kuya Louie's Carinderia continues to thrive, celebrating over two decades of serving delicious Filipino food. Louie's legacy lives on through his commitment to quality, community, and innovation. The carinderia remains a beloved institution, cherished by all who walk through its doors.";
}
