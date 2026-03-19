function checkNumbers() {
    let n = 0;
    do {
        if (n === 0) {
            console.log(n + " – це нуль");
        } else if (n % 2 === 0) {
            console.log(n + " – парне число");
        } else {
            console.log(n + " – непарне число");
        }
        n++;
    } while (n <= 10);
}
checkNumbers();