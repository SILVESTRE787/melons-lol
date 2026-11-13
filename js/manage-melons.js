// JSON - JavaScript Object Notation

let melons = [
    {
        color: "amarillo",
        weight: 30,
        price: 2,
    },
    {
        color: "lima",
        weight: 40,
        price: 4,
    },
    {
        color: "lima",
        weight: 300,
        price: 4,
    },
];

function showMelons() {
    const melonContainer = document.getElementById("melon-container");

    let cards = "";

    for (let i = 0; i < melons.length; i++) {
        cards += `
        <div class="melon-card">
            <p>${melons[i].color}</p>
            <p>${melons[i].weight}</p>
            <p>${melons[i].price}</p>
            <button onclick="deleteMelon(${i})">borrar</button>
            <button onclick="updateMelon(${i})">actualizar</button>
        </div>
    `;
    }

    melonContainer.innerHTML = cards;
}

function deleteMelon(idMelon) {
    melons.splice(idMelon,1);

    showMelons();
}

function listenOnMelonSubmit() {
    const melonForm = document.getElementById("melon-form");
    melonForm.addEventListener("submit", addMelon);
}

function addMelon(event) {
    event.preventDefault();
    const color = event.target.color.value;
    const weight = event.target.weight.value;
    const price = event.target.price.value;

    melons.push (
        {
            color: color,
            weight: weight,
            price: price,
        }
    );

    showMelons();
}

showMelons();
listenOnMelonSubmit();
addMelon();