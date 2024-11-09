// Завдання 1
console.log("варіант: ", ((163 - 1) % 15) + 1);
const form = document.getElementById("form");
const modal = document.getElementById("modal");
modal.style.visibility = "hidden";
const info = document.getElementById("info");
form.addEventListener("submit", validateForm);
modal.addEventListener("click", () => {
    modal.style.visibility = "hidden";
});

Array.from(form.elements)
    .filter((el) => el.tagName === "INPUT")
    .forEach((input) => {
        input.addEventListener("input", (event) => {
            event.target.style.backgroundColor = "white";
        });
    });

const namePattern = /^[А-ЯІЇЄҐ][а-яіїєґА]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
const groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const facultyPattern = /^[А-ЯІЇЄҐ]{4}$/;
const addressPattern = /^м\. [А-ЯІЇЄҐа-яіїєґ]{2,}$/;

function validateForm(event) {
    event.preventDefault();
    const name = form.name.value;
    const group = form.group.value;
    const phone = form.phone.value;
    const faculty = form.faculty.value;
    const address = form.address.value;
    let isCorrect = true;

    if (!namePattern.test(name)) {
        form.name.style.backgroundColor = "red";
        isCorrect = false;
    }
    if (!groupPattern.test(group)) {
        form.group.style.backgroundColor = "red";
        isCorrect = false;
    }
    if (!phonePattern.test(phone)) {
        form.phone.style.backgroundColor = "red";
        isCorrect = false;
    }
    if (!facultyPattern.test(faculty)) {
        form.faculty.style.backgroundColor = "red";
        isCorrect = false;
    }
    if (!addressPattern.test(address)) {
        form.address.style.backgroundColor = "red";
        isCorrect = false;
    }
    if (isCorrect) {
        modal.style.visibility = "visible";
        info.innerHTML = `<strong>Ім'я</strong>: ${name}<br><strong>Група</strong>: ${group}<br><strong>Телефон</strong>: ${phone}<br><strong>Факультет</strong>: ${faculty}<br><strong>Адреса</strong>: ${address}`;
    }
}

// Завдання 2
console.log("варіант: ", ((163 - 1) % 36) + 1);
const table = document.getElementById("table");
const colorInput = document.getElementById("colorInput");
for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");
        cell.textContent = i * 6 + j + 1;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const cell19 = table.querySelectorAll("td")[19 - 1];
cell19.addEventListener("mouseover", () => {
    cell19.style.backgroundColor = getRandomColor();
});
cell19.addEventListener("click", () => {
    cell19.style.backgroundColor = colorInput.value;
});
cell19.addEventListener("dblclick", () => {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (i === j) table.rows[i].cells[j].style.backgroundColor = getRandomColor();
        }
    }
});
