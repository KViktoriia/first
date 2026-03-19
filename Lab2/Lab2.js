// Завдання 1.1
const images = document.querySelectorAll('.task-img');
images.forEach(img => {
    img.onclick = function() {
        console.log("Ширина картинки: " + this.getAttribute('width'));
    };
});


// Завдання 1.2
const links = document.querySelectorAll('.task-link');
function addTitle() {
    this.title = this.href;
    this.removeEventListener('mouseover', addTitle);
}
links.forEach(link => {
    link.addEventListener('mouseover', addTitle);
});


// Завдання 1.3
const inputs = document.querySelectorAll('.task-input');
const demoPara = document.getElementById('demo');

inputs.forEach(input => {
    input.addEventListener('click', function() {
        demoPara.innerText = this.value;
    });
});


// Завдання 1.4
inputs.forEach(input => {
    function logToConsole() {
        console.log("Перше натискання (значення): " + this.value);
        this.removeEventListener('click', logToConsole);
        this.addEventListener('click', showAlert);
    }

    function showAlert() {
        alert("Повторне натискання (вміст): " + this.value);
    }

    input.addEventListener('click', logToConsole);
});


// Завдання 1.5
const wordsToNumbers = {
    "Два": 2,
    "П'ять": 5,
    "Десять": 10
};

const numParagraphs = document.querySelectorAll('.number-p');
numParagraphs.forEach(p => {
    p.addEventListener('click', function() {
        let text = this.innerText;
        
        if (wordsToNumbers[text]) {
            let num = wordsToNumbers[text];
            this.innerText = num * num;
        } else {
            let currentNum = parseInt(text);
            if (!isNaN(currentNum)) {
                this.innerText = currentNum * currentNum;
            }
        }
    });
});


// Завдання 2
const boxes = document.querySelectorAll('.color-box');

function paintRed() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', paintRed);
    this.addEventListener('click', paintGreen);
}

function paintGreen() {
    this.style.backgroundColor = 'green';
    this.removeEventListener('click', paintGreen);
    this.addEventListener('click', paintRed);
}

boxes.forEach(box => {
    box.addEventListener('click', paintRed);
});