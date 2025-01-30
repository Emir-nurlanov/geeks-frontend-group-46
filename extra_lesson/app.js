const exchangeRates = {
    usd: 0.011,
    eur: 0.010,
    rub: 1.12,
};

const amountInput = document.getElementById("amount");
const usdCheckbox = document.getElementById("usd");
const eurCheckbox = document.getElementById("eur");
const rubCheckbox = document.getElementById("rub");
const resultDiv = document.getElementById("results");

function calculate() {
    const amount = parseFloat(amountInput.value);


    resultDiv.innerHTML = "";

    if (usdCheckbox.checked) {
        const dollarBlock = document.createElement('div');
        dollarBlock.innerHTML = `$ ${(amount * exchangeRates.usd).toFixed(2)}<br>`;
        dollarBlock.style.backgroundColor = '#e0f7fa';
        dollarBlock.style.padding = '10px';
        dollarBlock.style.marginBottom = '5px';
        dollarBlock.style.width = '100px';
        resultDiv.appendChild(dollarBlock);
    }

    if (eurCheckbox.checked) {
        const euroBlock = document.createElement('div');
        euroBlock.innerHTML = `€ ${(amount * exchangeRates.eur).toFixed(2)}<br>`;
        euroBlock.style.backgroundColor = '#c8e6c9';
        euroBlock.style.padding = '10px';
        euroBlock.style.marginBottom = '5px';
        euroBlock.style.width = '100px';
        resultDiv.appendChild(euroBlock);
    }

    if (rubCheckbox.checked) {
        const rubleBlock = document.createElement('div');
        rubleBlock.innerHTML = `₽ ${(amount * exchangeRates.rub).toFixed(2)}<br>`;
        rubleBlock.style.backgroundColor = '#ffcdd2';
        rubleBlock.style.padding = '10px';
        rubleBlock.style.marginBottom = '5px';
        rubleBlock.style.width = '100px';
        resultDiv.appendChild(rubleBlock);
    }


    if (!usdCheckbox.checked && !eurCheckbox.checked && !rubCheckbox.checked) {
        resultDiv.innerHTML = "Пожалуйста, выберите хотя бы одну валюту.";
    }
}

amountInput.addEventListener("input", calculate);
usdCheckbox.addEventListener("change", calculate);
eurCheckbox.addEventListener("change", calculate);
rubCheckbox.addEventListener("change", calculate);