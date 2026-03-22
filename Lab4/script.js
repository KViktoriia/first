// 1. Залишок від ділення на 60
console.log("Завдання 1");
function seconds(total) {
    return total % 60;
}
console.log("Залишок від 125 секунд:", seconds(125));

// 2. Периметр багатокутника
console.log("Завдання 2");
function perimeter(side, count) {
    return side * count;
}
console.log("Периметр 5-кутника зі стороною 10:", perimeter(10, 5));

// 3. FizzBuzz
console.log("Завдання 3");
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
        else if (i % 3 === 0) console.log("fizz");
        else if (i % 5 === 0) console.log("buzz");
        else console.log(i);
    }
}
fizzBuzz(15);

// 4. Середнє арифметичне трьох чисел
console.log("Завдання 4");
function Calculate(a, b, c) {
    let result = (a + b + c) / 3;
    console.log(`Середнє арифметичне ${a}, ${b}, ${c} = ${result}`);
}
Calculate(10, 20, 30);

console.log("Завдання 5");

function isDivisibleIf(n, x, y) {
    if (n % x === 0 && n % y === 0) return true;
    else return false;
}

const isDivisibleTernary = (n, x, y) => (n % x === 0 && n % y === 0) ? true : false;

const isDivisibleLogic = (n, x, y) => n % x === 0 && n % y === 0;

console.log("Чи ділиться 12 на 3 і 4:", isDivisibleIf(12, 3, 4));

// 6. Аналіз масиву
console.log("Завдання 6");
function analyzeArray(N) {
    let arr = [];
    for(let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;
    let odds = arr.filter(num => num % 2 !== 0);

    console.log("Масив:", arr);
    console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}, Average: ${avg}`);
    console.log("Непарні значення:", odds);
}
analyzeArray(10);


// 7. Двовимірний масив 5х5
console.log("Завдання 7");
function matrixTask() {
    let matrix = [];
    for(let i = 0; i < 5; i++) {
        matrix[i] = [];
        for(let j = 0; j < 5; j++) {
            matrix[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }
    console.log("Матриця до змін:", JSON.parse(JSON.stringify(matrix)));

    for(let i = 0; i < 5; i++) {
        if (matrix[i][i] < 0) matrix[i][i] = 0;
        else if (matrix[i][i] > 0) matrix[i][i] = 1;
    }
    console.log("Матриця після змін діагоналі:", matrix);
}
matrixTask();


console.log("Завдання 8");
const Add = (a, b) => console.log(`${a} + ${b} = ${a + b}`);
const Sub = (a, b) => console.log(`${a} - ${b} = ${a - b}`);
const Mul = (a, b) => console.log(`${a} * ${b} = ${a * b}`);
const Div = (a, b) => b === 0 ? console.log("Помилка: ділення на нуль!") : console.log(`${a} / ${b} = ${a / b}`);

function startCalculator() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let op = prompt("Оберіть операцію (+, -, *, /):");

    switch(op) {
        case '+': Add(num1, num2); break;
        case '-': Sub(num1, num2); break;
        case '*': Mul(num1, num2); break;
        case '/': Div(num1, num2); break;
        default: console.log("Невідома операція");
    }
}
    startCalculator();

// 9. Перевірка числа
console.log("Завдання 9");
console.log("Число 30");
function checkNumber(num) {
    console.log(num >= 0 ? "Позитивне" : "Негативне");
    
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { isPrime = false; break; }
    }
    console.log(isPrime ? "Просте" : "Не просте");

    let divisors = [2, 5, 3, 6, 9];
    divisors.forEach(d => {
        if (num % d === 0) console.log(`Ділиться на ${d} без залишку`);
    });
}
checkNumber(30);

// 10. Переворот та квадрат
console.log("Завдання 10");
function transformArray(arr) {
    return arr.reverse().map(item => {
        return typeof item === 'number' ? item ** 2 : item;
    });
}
console.log("Трансформація [1, 'txt', 3]:", transformArray([1, 'txt', 3]));

// 11. Видалення дублікатів
console.log("Завдання 11");
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Без дублікатів:", removeDuplicates([1, 2, 2, 4, 5, 4, 7]));