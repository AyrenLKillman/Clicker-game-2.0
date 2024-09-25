const clickCounter = document.getElementById('click-counter');
let totalMoney = clickCounter.innerText = 0;
let Multiplier = 1;
let lastClickTime = 0
// Update the click counter
function updateClickCounter() {
    const currentTime = Date.now();
    if (currentTime - lastClickTime >= 300) {
        totalMoney = totalMoney + Multiplier;
        clickCounter.innerText = totalMoney;
        lastClickTime = currentTime;
    }
}

function updateClickCounterAuto() {
    totalMoney = totalMoney + Multiplier;
    clickCounter.innerText = totalMoney;
    lastClickTime = currentTime;
}
function CostofItem(Price) {
    if (totalMoney >= Price) {
        totalMoney = totalMoney - Price;
    } else {
        return false;
    }
}



function autoClicker() {
    if (CostofItem(10) == false) {
        return false;
    } else {

        setInterval(updateClickCounterAuto, 10000);
        clickCounter.innerText = totalMoney;
    }
}

function FasterAutoClicker() {
    if (CostofItem(50) == false) {
        return false;
    } else {
        setInterval(updateClickCounterAuto, 6000);
        clickCounter.innerText = totalMoney;
    }
}

function EfficientAutoClicker() {
    if (CostofItem(100) == false) {
        return false;
    } else {
        setInterval(updateClickCounterAuto, 1000);
        clickCounter.innerText = totalMoney;
    }
}
