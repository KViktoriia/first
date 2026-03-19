let numb = 10000;
let counter = 0;
let result;

while (numb >= 50) {
    numb = numb / 2;
    counter++;
}
result = numb;

console.log("Результат (result): " + result);
console.log("Кількість ітерацій (counter): " + counter);