const textArea = document.querySelector('.text_area');
const copy = document.querySelector('.copy');
const buttons = document.querySelectorAll('.list button');

let UperCase = false;

function changeCase () {
    if (UperCase) {
        for (let i = 0; i <= 25; i++) {
            buttons[i].textContent = buttons[i].textContent.toLowerCase();
        }
    } else {
        for (let i = 0; i <= 25; i++) {
            buttons[i].textContent = buttons[i].textContent.toUpperCase();
        }
    }

    UperCase = !UperCase;
    buttons[buttons.length - 1].classList.toggle('activ');
}

function addLetter(letter) {
    if (letter === 'Backspace') {
        textArea.value = textArea.value.slice(0, -1);
        return;
    }

    if (letter === 'Caps Lock') {
        changeCase();
        return;
    }

    if (letter === 'Space') {
        textArea.value += ' ';
        return;
    }
    
    textArea.value += letter;
}

buttons.forEach((i) => {
    i.addEventListener('click', () => {
        addLetter(i.textContent);
    });
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(textArea.value);
});