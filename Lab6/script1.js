const data = {
    ua: {
        question: "Введіть номер дня неділі від 1 до 7?",
        error: "Неправильний ввід даних",
        days: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"]
    },
    en: {
        question: "Enter the day number of the week (from 1 to 7)?",
        error: "Incorrect data input",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }
};

let lang;
while (true) {
    let input = prompt("Виберіть мову 'ua' або 'en'?");
    if (input) {
        lang = input.toLowerCase();
        if (data[lang]) break;
    }
    alert("Неправильний ввід даних");
}

let dayIndex;
while (true) {
    let input = prompt(data[lang].question);
    dayIndex = parseInt(input);
    if (dayIndex >= 1 && dayIndex <= 7) break;
    alert(data[lang].error);
}

alert(data[lang].days[dayIndex - 1]);