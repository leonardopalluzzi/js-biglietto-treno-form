const formEl = document.querySelector('.ticket-form');
const distanceEl = document.getElementById('distance');
const ageEl = document.getElementById('age');
const nameEl = document.getElementById('name');

const outName = document.querySelector('.out-name');
const outAge = document.querySelector('.out-age');
const outOffer = document.querySelector('.out-offer');
const outTrain = document.querySelector('.out-train');
const outCode = document.querySelector('.out-code');
const outPrice = document.querySelector('.out-price');

const offers = ['Minorenni', 'Over 65', 'Nessun Offerta'];
let i;


function priceCalc (km, age) {
    const basePrice = km * 0.21;
    let finalPrice;
    if (isNaN(km)) {
        alert('per favore inserire un numero di km');
        location.reload();
    } else if (age == '65') {
        finalPrice = basePrice - ((basePrice * 40) / 100);
        i = 1;
    } else if (age == 'minor') {
        finalPrice = basePrice - ((basePrice*20) / 100);
        i = 0;
    } else {
        finalPrice = basePrice
        i = 2;
    }
    return finalPrice.toFixed(2);
}

function ticketGenerator () {
    outName.innerHTML = nameEl.value;
    outAge.innerHTML = ageEl.value;
    outOffer.innerHTML = offers[i];
    outTrain.innerHTML = Math.floor(Math.random() * 12);
    outCode.innerHTML = Math.floor(Math.random() * 100000);
    outPrice.innerHTML = `${priceCalc(distanceEl.value, ageEl.value)} <span>&euro;</span>`;
    

}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(distanceEl, ageEl);
    console.log(priceCalc(distanceEl.value, ageEl.value));
    console.log(ticketGenerator());
});