document.addEventListener("DOMContentLoaded", loadMenu);

function loadMenu() {
  const container = document.getElementById("menu-container");

  fetch("data/menu.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");
      const items = xml.getElementsByTagName("item");

      container.innerHTML = "";

      for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName("name")[0].textContent;
        const description = items[i].getElementsByTagName("description")[0].textContent;
        const price = items[i].getElementsByTagName("price")[0].textContent;
        const image = items[i].getElementsByTagName("image")[0].textContent;

        const card = document.createElement("div");
        card.className = "menu-card";

        card.innerHTML = `
          <img src="images/${image}" alt="${name}">
          <div class="menu-card-content">
            <h3>${name}</h3>
            <div class="small-line"></div>
            <p>${description}</p>
            <p class="price">$${price}</p>
          </div>
        `;

        container.appendChild(card);
      }
    });
}