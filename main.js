const formEl = document.querySelector('.ticket-form');
const distanceEl = document.getElementById('distance');
const ageEl = document.getElementById('age');



function priceCalc (km, age) {
    const basePrice = km * 0.21;
    let finalPrice;
    if (isNaN(km) || isNaN(age)) {
        alert('per favore inserire un numero');
        location.reload();
    }
    if (age >= 65) {
        finalPrice = basePrice - ((basePrice * 40) / 100);
    } else if (age < 18) {
        finalPrice = basePrice - ((basePrice*20) / 100);
    } else {
        finalPrice = basePrice
    }
    return finalPrice;
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(distanceEl, ageEl);
    console.log(priceCalc(distanceEl.value, ageEl.value));
});