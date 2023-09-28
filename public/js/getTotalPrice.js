
const price = document.querySelectorAll('#item-price');
//   .addEventListener('click', removeFromPage);
let total = 0;

console.log(price);
for (i = 0; i < btns.length; i++) {
    console.log(price[i].textContent)
    let priceDec = parseFloat(price[i].textContent) 
    total = total + priceDec;
}

console.log(total)

const totalPrice = document.getElementById('total-price')
console.log(totalPrice)
totalPrice.textContent = total;