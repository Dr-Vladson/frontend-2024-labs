const btn = document.querySelector("#btn");
const block = document.querySelector("#content");
console.log("варіант: ", ((163 - 1) % 20) + 1);
btn.addEventListener("click", () => {
    fetch("https://randomuser.me/api")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.results.forEach((profile) => {
                renderCard(profile);
            });
        });
});

function renderCard(profile) {
    const container = document.createElement("div");
    container.classList.add("card");

    const img = document.createElement("img");
    img.src = profile.picture.large;
    img.alt = "Profile picture #" + profile.login.uuid;
    img.classList.add("card__picture");

    const details = document.createElement("div");
    details.classList.add("card__details");

    details.innerHTML = `
    <p><strong>Country:</strong> ${profile.location.country}</p>
        <p><strong>City:</strong> ${profile.location.city}</p>
        <p><strong>Postcode:</strong> ${profile.location.postcode}</p>
        <p><strong>Email:</strong> ${profile.email}</p>
    `;

    container.appendChild(img);
    container.appendChild(details);

    block.appendChild(container);
}
