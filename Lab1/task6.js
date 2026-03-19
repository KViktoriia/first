let dayNumber = parseInt(prompt("Введіть число від 1 до 7 (день тижня):"));
let dayName;

switch (dayNumber) {
    case 1: dayName = "Понеділок"; break;
    case 2: dayName = "Вівторок"; break;
    case 3: dayName = "Середа"; break;
    case 4: dayName = "Четвер"; break;
    case 5: dayName = "П'ятниця"; break;
    case 6: dayName = "Субота"; break;
    case 7: dayName = "Неділя"; break;
    default: dayName = "Помилка! Введіть число від 1 до 7.";
}

document.write("<h3>Сьогодні: " + dayName + "</h3>");