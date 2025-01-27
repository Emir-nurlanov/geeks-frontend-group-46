function generatePassword() {
    let length = 4;
    let passwordContainer = document.getElementById('password-container');

    // Очистка контейнера от старых блоков
    passwordContainer.innerHTML = '';

    // Создаем блоки для пароля
    for (let i = 0; i < length; i++) {
        let digit = document.createElement('div');
        digit.classList.add('password-block');
        digit.textContent = '0';
        passwordContainer.appendChild(digit);
    }

    updatePassword();
}


function updatePassword() {
    let blocks = document.getElementsByClassName('password-block');


    for (let i = 0; i < blocks.length; i++) {
        let digit = Math.floor(Math.random() * 10);
        blocks[i].textContent = digit;
    }
}

generatePassword();
