let i = 2;
while (i <= 100) {
    let isPrime = true;
    let j = 2;

    while (j <= Math.sqrt(i)) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++
    }

    if (isPrime) {
        console.log(i);
    }
    i++;
}