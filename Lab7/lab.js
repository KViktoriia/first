function showTime() {
    const now = new Date();
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    const result = `${hh}:${mm}:${ss}, ${days[now.getDay()]} , ${day} ${months[now.getMonth()]} ${now.getFullYear()} року`;
    console.log(result);
}

function startGame() {
    let playAgain = true;

    while (playAgain) {
        const target = Math.floor(Math.random() * 51);
        let attempts = 0;
        let success = false;

        while (!success) {
            let input = prompt("Вгадайте число від 0 до 50:");
            if (input === null) return;

            let num = parseInt(input);
            attempts++;

            const now = new Date();
            const logTime = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

            if (num === target) {
                alert(`За ${attempts} спроб ви вгадали число ${target}`);
                success = true;
            } else {
                let diff = Math.abs(target - num);
                let hint = "";

                if (diff <= 5) hint = "гаряче";
                else if (diff <= 15) hint = "тепло";
                else hint = "холодно";

                console.log(`${logTime} Спроба ${attempts}: число ${num} – не вірно`);
                alert(`Не вгадали! Було ${hint}.`);
            }
        }
        playAgain = confirm("Спробувати ще раз?");
    }
}