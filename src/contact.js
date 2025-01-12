export function ContactUs() {
  const createDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const label = document.createElement("label");
  const input = document.createElement("input");

  // generate logo and add it on the left side
  // add grabfood and foodpanda logos for delivery

  const divContent = document.querySelector("#content");

  const mainContainer = createDiv.cloneNode(true);
  mainContainer.classList.add("main-container");
  divContent.appendChild(mainContainer);

  const divHeader = createDiv.cloneNode(true);
  divHeader.classList.add("header");

  h1.textContent = "Contact Us";
  mainContainer.appendChild(divHeader);
  divHeader.appendChild(h1);

  const divContact = createDiv.cloneNode(true);
  divContact.classList.add("contact-container");
  mainContainer.appendChild(divContact);

  const divPhone = createDiv.cloneNode(true);
  divPhone.classList.add("contact");
  divPhone.id = "phone";
  divContact.appendChild(divPhone);
  divPhone.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323" style="enable-background:new 0 0 28.314 28.323" xml:space="preserve"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/></svg>';
  const h3Phone = h3.cloneNode(true);
  divPhone.appendChild(h3Phone);
  h3Phone.textContent = "(02) 000 - 0000";

  const divEmail = createDiv.cloneNode(true);
  divEmail.classList.add("contact");
  divEmail.id = "email";
  divContact.appendChild(divEmail);
  divEmail.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="27-Email-Message"><path d="M31.59 11.19 27 7.83V5a1 1 0 0 0-1-1h-4.22L16.59.19a1 1 0 0 0-1.18 0L10.22 4H6a1 1 0 0 0-1 1v2.83L.41 11.19A1 1 0 0 0 0 12v17a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V12a1 1 0 0 0-.41-.81zM27 10.31l2.2 1.61-2.2 1.31zM16 2.24 18.4 4h-4.8zM7 6h18v8.43l-9 5.4-9-5.4zm-2 4.31v2.93l-2.2-1.32zM2 28.59V13.77l9.26 5.56zM3.41 30 13 20.38l2.46 1.47a1 1 0 0 0 1 0L19 20.38 28.59 30zM30 28.59l-9.26-9.26L30 13.77z"/><path d="M10 9h12v2H10zM12 13h8v2h-8z"/></g></svg>';
  const h3Email = h3.cloneNode(true);
  divEmail.appendChild(h3Email);
  h3Email.textContent = "kuyalouie.carinderia@gmail.com";

  const divFB = createDiv.cloneNode(true);
  divFB.classList.add("contact");
  divFB.id = "facebook";
  divContact.appendChild(divFB);
  divFB.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 11h-8.52L19 9.8A6.42 6.42 0 0 0 13 1a1 1 0 0 0-.93.63L8.32 11H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18.17a3 3 0 0 0 2.12-.88l3.83-3.83a3 3 0 0 0 .88-2.12V14a3 3 0 0 0-3-3zM4 28V14a1 1 0 0 1 1-1h3v16H5a1 1 0 0 1-1-1zm24-3.83a1 1 0 0 1-.29.71l-3.83 3.83a1.05 1.05 0 0 1-.71.29H10V12.19l3.66-9.14a4.31 4.31 0 0 1 3 1.89 4.38 4.38 0 0 1 .44 4.12l-1 2.57A1 1 0 0 0 17 13h10a1 1 0 0 1 1 1z" data-name="thumb up android app aplication phone"/></svg>';
  const h3FB = h3.cloneNode(true);
  divFB.appendChild(h3FB);
  h3FB.textContent = "Like us on Facebook";

  const divIG = createDiv.cloneNode(true);
  divIG.classList.add("contact");
  divIG.id = "insta";
  divContact.appendChild(divIG);
  divIG.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="camera android app aplication phone"><path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zM8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28A63 63 0 0 1 29 15h-5a8 8 0 0 0-15.93 0H3a63 63 0 0 1 .39-6.3A6 6 0 0 1 8.7 3.42zM22 16a6 6 0 1 1-6-6 6 6 0 0 1 6 6zm1.3 12.58a63.65 63.65 0 0 1-14.6 0 6 6 0 0 1-5.28-5.28A63 63 0 0 1 3 17h5a8 8 0 0 0 15.86 0h5a63 63 0 0 1-.39 6.3 6 6 0 0 1-5.17 5.28z"/><path d="M16 12a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/><circle cx="24" cy="8" r="1"/></g></svg>';
  const h3IG = h3.cloneNode(true);
  divIG.appendChild(h3IG);
  h3IG.textContent = "Follow us on Instagram";

  const divLocation = createDiv.cloneNode(true);
  divLocation.classList.add("contact");
  divLocation.id = "address";
  divContact.appendChild(divLocation);
  divLocation.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:#231f20}</style></defs><g id="location"><path class="cls-1" d="M22.37 21.09a1 1 0 0 0-1.3.56 1 1 0 0 0 .56 1.3C23.09 23.53 24 24.32 24 25c0 1.22-3.12 3-8 3s-8-1.78-8-3c0-.68.91-1.47 2.37-2.05a1 1 0 0 0 .56-1.3 1 1 0 0 0-1.3-.56C7.29 22 6 23.41 6 25c0 2.85 4.3 5 10 5s10-2.15 10-5c0-1.59-1.29-3-3.63-3.91z"/><path class="cls-1" d="M16 25a1 1 0 0 0 .68-.27C24 17.82 25.47 9.4 22.59 5.26a7.5 7.5 0 0 0-2.74-2.33 8.43 8.43 0 0 0-7.7 0 7.5 7.5 0 0 0-2.74 2.33C6.53 9.4 8 17.82 15.32 24.73A1 1 0 0 0 16 25zM11.05 6.4a5.5 5.5 0 0 1 2-1.69 6.4 6.4 0 0 1 5.86 0A5.5 5.5 0 0 1 21 6.4c2.2 3.25.9 10.25-5 16.2-5.9-5.95-7.2-12.95-4.95-16.2z"/><path class="cls-1" d="M19 9a3 3 0 1 0-3 3 3 3 0 0 0 3-3zm-4 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1z"/></g></svg>';
  const h3Location = h3.cloneNode(true);
  divLocation.appendChild(h3Location);
  h3Location.textContent = "1234 Unknown Street, Anywhere City";

  const divFeedback = createDiv.cloneNode(true);
  divFeedback.classList.add("feedback");
  divContact.appendChild(divFeedback);
  const h2Feedback = h2.cloneNode(true);
  divFeedback.appendChild(h2Feedback);
  h2Feedback.textContent = "Feedback or Suggestions?";

  const divForm = createDiv.cloneNode(true);
  divForm.classList.add("form");
  divFeedback.appendChild(divForm);

  const form = document.createElement("form");
  form.setAttribute("action", "./.");
  form.setAttribute("method", "POST");
  divForm.appendChild(form);

  const nameDiv = createDiv.cloneNode(true);
  nameDiv.classList.add("form-divs");
  form.appendChild(nameDiv);
  const nameLabel = label.cloneNode(true);
  nameLabel.setAttribute("for", "feedback-name");
  nameLabel.textContent = "Name:";
  nameDiv.appendChild(nameLabel);
  const nameInput = input.cloneNode(true);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "feedback-name");
  nameInput.setAttribute("placeholder", "Enter your name");
  nameInput.id = "feedback-name";
  nameDiv.appendChild(nameInput);

  const emailDiv = createDiv.cloneNode(true);
  emailDiv.classList.add("form-divs");
  form.appendChild(emailDiv);
  const emailLabel = label.cloneNode(true);
  emailLabel.setAttribute("for", "feedback-email");
  emailLabel.textContent = "Email:";
  emailDiv.appendChild(emailLabel);
  const emailInput = input.cloneNode(true);
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("name", "feedback-email");
  emailInput.setAttribute("placeholder", "Enter your email");
  emailInput.id = "feedback-email";
  emailDiv.appendChild(emailInput);

  const subjectDiv = createDiv.cloneNode(true);
  subjectDiv.classList.add("form-divs");
  form.appendChild(subjectDiv);
  const subjectLabel = label.cloneNode(true);
  subjectLabel.setAttribute("for", "feedback-subject");
  subjectLabel.textContent = "Subject:";
  subjectDiv.appendChild(subjectLabel);
  const subjectInput = input.cloneNode(true);
  subjectInput.setAttribute("type", "text");
  subjectInput.setAttribute("name", "feedback-subject");
  subjectInput.setAttribute("placeholder", "Enter subject here");
  subjectInput.id = "feedback-subject";
  subjectDiv.appendChild(subjectInput);

  const messageDiv = createDiv.cloneNode(true);
  messageDiv.classList.add("form-divs");
  form.appendChild(messageDiv);
  const messageLabel = label.cloneNode(true);
  messageLabel.setAttribute("for", "feedback-message");
  messageLabel.textContent = "Message:";
  messageDiv.appendChild(messageLabel);
  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("type", "text-area");
  messageInput.setAttribute("name", "feedback-message");
  messageInput.setAttribute("placeholder", "Enter your message here");
  messageInput.id = "feedback-message";
  messageDiv.appendChild(messageInput);

  const submitDiv = createDiv.cloneNode(true);
  submitDiv.classList.add("form-submit");
  divFeedback.appendChild(submitDiv);
  const submitInput = input.cloneNode(true);
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("value", "Submit");
  submitDiv.appendChild(submitInput);
}
