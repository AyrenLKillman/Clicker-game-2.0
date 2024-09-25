const clickCounter = document.getElementById('click-counter');
let totalMoney = clickCounter.innerText = 0;
let Multiplier = 1;
// Update the click counter
function updateClickCounter() {
    totalMoney = totalMoney + Multiplier;
    clickCounter.innerText = totalMoney;
}
function CostofItem(Price) {
    if (totalMoney >= Price) {
        totalMoney = totalMoney - Price;
    } else {
        return false;
    }
}

function DoubleMultiplier() {
    if (CostofItem(50) == false) {
        return false;
    } else {
        Multiplier = Multiplier * 2;
        clickCounter.innerText = totalMoney;
    }
}

function autoClicker() {
    if (CostofItem(10) == false) {
        return false;
    } else {
        setInterval(updateClickCounter, 10000);
        clickCounter.innerText = totalMoney;
    }
}