
const clickCounter = document.getElementById('click-counter');
let totalMoney = clickCounter.innerText = 0;
let Multiplier = 1;
let lastClickTime = 0
let clickTime = 300
// Update the click counter
function updateClickCounter() {
    const currentTime = Date.now();
    if (currentTime - lastClickTime >= clickTime) {
        totalMoney = totalMoney + Multiplier;
        clickCounter.innerText = totalMoney;
        lastClickTime = currentTime;
    }
}

function updateClickCounterAuto() {
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

let Active = false;
function BetterClicks() {

    if (Active == false) {
        Active = true;
        if (CostofItem(100) == false) { console.log(`You don't have enough money`) }
        else {

            clickTime = 100;
            clickCounter.innerText = totalMoney;
        }
    } else {
        Active = true;
        console.log(`Already active`)

    }
}
