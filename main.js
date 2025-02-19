const formEl = document.querySelector('.ticket-form');
const distanceEl = document.getElementById('distance');
const ageEl = document.getElementById('age');



function priceCalc (km, age) {
    const basePrice = km * 0.21;
    let finalPrice;
    if (age >= 65) {
        finalPrice = basePrice - ((basePrice * 40) / 100);
    } else if (age < 18) {
        finalPrice = basePrice - ((basePrice*20) / 100);
    } else {
        finalPrice = basePrice
    }
    return finalPrice;
}

console.log(priceCalc(distanceEl, ageEl));


console.log(distanceEl, ageEl);


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(distanceEl, ageEl);
    
})