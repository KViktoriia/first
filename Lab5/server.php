<?php
// Перевіряємо, чи отримано дані методом POST
if (isset($_POST['number'])) {
    $number = $_POST['number'];

    // Перевірка, чи це дійсно число
    if (is_numeric($number)) {
        $number = floatval($number);
        // Обрахунок квадрата числа на серверній стороні
        $square = $number * $number;

        // Формування текстової відповіді
        echo "Квадрат введеного числа $number дорівнює $square.";
    } else {
        echo "Помилка: введено не коректне число.";
    }
} else {
    echo "Дані не отримано.";
}
?>