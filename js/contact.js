document.addEventListener("DOMContentLoaded", function () {
  loadBranches();

  const form = document.getElementById("enquiryForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent.");
    form.reset();
  });
});

function loadBranches() {
  const container = document.getElementById("branches-container");

  fetch("data/branches.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");
      const branches = xml.getElementsByTagName("branch");

      container.innerHTML = "";

      for (let i = 0; i < branches.length; i++) {
        const name = branches[i].getElementsByTagName("name")[0].textContent;
        const address = branches[i].getElementsByTagName("address")[0].textContent;
        const phone = branches[i].getElementsByTagName("phone")[0].textContent;
        const hours = branches[i].getElementsByTagName("hours")[0].textContent;
        const map = branches[i].getElementsByTagName("map")[0].textContent;

        const card = document.createElement("div");
        card.className = "branch-card";

        card.innerHTML = `
          <h3>${name}</h3>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Contact:</strong> ${phone}</p>
          <p><strong>Opening Hours:</strong> ${hours}</p>
          <p><a href="${map}" target="_blank">View on Google Maps</a></p>
        `;

        container.appendChild(card);
      }
    });
}