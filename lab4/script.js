// task 1
const fourthElement = document.getElementById("fourth");
const fifthElement = document.querySelector("#fifth");
fourthElement.style.backgroundColor = "white";
fifthElement.style.backgroundColor = "white";
fourthElement.addEventListener("click", () => {
    if (fourthElement.style.backgroundColor === "white") {
        fourthElement.style.backgroundColor = "red";
    } else {
        fourthElement.style.backgroundColor = "white";
    }
});
fifthElement.addEventListener("click", () => {
    if (fifthElement.style.backgroundColor === "white") {
        fifthElement.style.backgroundColor = "red";
    } else {
        fifthElement.style.backgroundColor = "white";
    }
});

// task 2
const url = "https://www.italieonline.eu/img/t1100h0/blogimg/leto/lazio/rim.webp";
const imagesCont = document.querySelector("#images");
const addBtn = document.querySelector("#add");
const incBtn = document.querySelector("#inc");
const decBtn = document.querySelector("#dec");
const delBtn = document.querySelector("#del");
let currentSize = 150;
imagesCont.querySelectorAll("img").forEach((img) => {
    img.style.width = currentSize + "px";
    img.style.height = currentSize + "px";
});

addBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = url;
    img.style.width = currentSize + "px";
    img.style.height = currentSize + "px";
    imagesCont.appendChild(img);
});

incBtn.addEventListener("click", () => {
    if (currentSize >= 300) {
        return;
    }
    currentSize += 30;
    const images = imagesCont.querySelectorAll("img");
    images.forEach((img) => {
        img.style.width = `${currentSize}px`;
        img.style.height = `${currentSize}px`;
    });
});

decBtn.addEventListener("click", () => {
    if (currentSize <= 30) return;
    currentSize -= 20;
    const images = imagesCont.querySelectorAll("img");
    images.forEach((img) => {
        img.style.width = `${currentSize}px`;
        img.style.height = `${currentSize}px`;
    });
});

delBtn.addEventListener("click", () => {
    if (imagesCont.childElementCount === 0) return;
    imagesCont.removeChild(imagesCont.lastElementChild);
});
