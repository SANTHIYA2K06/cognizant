const container =

document.querySelector(
"#eventContainer"
);

const card =

document.createElement(
"div"
);

card.innerHTML =

"<h3>Music Festival</h3>";

container.appendChild(card);

/* Update UI */

card.innerHTML =

"<h3>Registered Successfully</h3>";