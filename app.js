function mergeProductCount(product, isIncrease) {
    const addEProductInput = document.getElementById(product + '-input');
    const inputCount = parseInt(addEProductInput.value);
    let newInputCount = inputCount;
    if (isIncrease === true) {
        newInputCount = inputCount + 1;
    };
    if (isIncrease === false && newInputCount > 0) {
        newInputCount = inputCount - 1;
    };
    addEProductInput.value = newInputCount;
    let total = 0;
    if (product == 'first') {
        total = newInputCount * 150;
    };
    if (product == 'economy') {
        total = newInputCount * 100;
    };
    document.getElementById('subtotal').innerText = total;
    calculateTotal();
};

function calculateTotal() {
    // const firstInput = document.getElementById('first-input');
    // const firstCount = parseInt(firstInput.value);
    const firstCount = idWrapper('first');

    // const economyInput = document.getElementById('economy-input');
    // const economyCount = parseInt(economyInput.value);
    const economyCount = idWrapper('economy');

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText = totalPrice;

    const totalVat = totalPrice / 10;
    document.getElementById('vat').innerText = totalVat;

    const totalAllPrice = totalPrice + totalVat;
    document.getElementById('total-all-price').innerText = totalAllPrice;
}

function idWrapper(product) {
    const productInput = document.getElementById(product + '-input');
    const productCount = parseInt(productInput.value);
    return productCount;
}

// This is for booking
function BookingTicket() {
    const hideDisplay = document.getElementById('hide-display');
    hideDisplay.style.display = 'none';
    const showDisplay = document.getElementById('ticket');
    showDisplay.style.display = 'block';
}








// function mergeIt(isIncrease) {
//     const addFirstInput = document.getElementById('first-input');
//     const inputCount = parseInt(addFirstInput.value);
//     let newInputCount = inputCount;
//     if (isIncrease === true) {
//         newInputCount = inputCount + 1;
//     }
//     if (isIncrease === false && newInputCount > 0) {
//         newInputCount = inputCount - 1;
//     }
//     addFirstInput.value = newInputCount;
//     const total = newInputCount * 150;
//     document.getElementById('subtotal').innerText = total;
// };

// function mergeEconomy(isIncrease) {
//     const addEconomyInput = document.getElementById('economy-input');
//     const inputCount = parseInt(addEconomyInput.value);
//     let newInputCount = inputCount;
//     if (isIncrease === true) {
//         newInputCount = inputCount + 1;
//     }
//     if (isIncrease === false && newInputCount > 0) {
//         newInputCount = inputCount - 1;
//     }
//     addEconomyInput.value = newInputCount;
//     const total = newInputCount * 100;
//     document.getElementById('subtotal').innerText = total;
// }