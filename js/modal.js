// JSON JavaScript Object notation

let pens = [
    {
        brand: "bic",
        color: "green",
        price: 10,
    },
    {
        brand: "pilot",
        color: "orange",
        price: 1,
    },
    {
        brand: "stabilo",
        color: "pink",
        price: 2,
    },
];

function showPens() {
    const penContainer = document.getElementById("pen-container");

    let allPens = "";

    for (let i = 0; i < pens.length; i++) {
        allPens += `
        <div class="pen">
            <h2>${pens[i].brand}</h2>
            <p>${pens[i].color}</p>
            <p>${pens[i].price}</p>
            <button onclick="deletePen(${i})">Borrar</button>
        </div>
        `;
    }

    penContainer.innerHTML = allPens;
}

function listenOnOpenButton() {
    const openButton = document.getElementById("open-modal");

    openButton.addEventListener("click", openModal);
}

function listenOnCloseButton() {
    const closeButton = document.getElementById("close-modal");

    closeButton.addEventListener("click", closeModal);
}

function openModal() {
    const modalDialog = document.getElementById("modal-dialog");
    modalDialog.showModal();
}

function closeModal() {
    const modalDialog = document.getElementById("modal-dialog");
    modalDialog.close();
}

listenOnOpenButton();
listenOnCloseButton();
showPens();