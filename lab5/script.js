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
