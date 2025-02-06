// VARIABLES
const CookieLabel = document.getElementById("CookieLabel");
const CookieBtn = document.getElementById("CookieBtn");
const ClickBoosterElement = document.getElementById("ClickBooster");
let TotalCookies = 0;
let CookiesPerSecond = 1;
let ClickBoosterCost = 5;
let ClickBoosterLevel = 0;

// FUNCTIONALITY

function updateClickBoosterDisplay() {
    ClickBoosterElement.innerHTML = `ClickBooster<br>Cost: ${ClickBoosterCost}<br>LV: ${ClickBoosterLevel}`;
}

function Cookies() {
    TotalCookies += CookiesPerSecond;
    CookieLabel.textContent = `Cookies: ${TotalCookies}`;
}

// ClickerBooster increases CPS by 1
function ClickBooster() {
    if (TotalCookies >= ClickBoosterCost) {
        TotalCookies -= ClickBoosterCost;
        CookiesPerSecond += 1;
        ClickBoosterCost *= 2;
        ClickBoosterLevel += 1;
        updateClickBoosterDisplay();
        CookieLabel.textContent = `Cookies: ${TotalCookies}`;
    }
}