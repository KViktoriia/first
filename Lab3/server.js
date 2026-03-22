const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Робимо папку з файлами статичною, щоб браузер бачив js/main.js
app.use(express.static(__dirname));

// Роут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Роут для окремої сторінки (якщо треба за завданням)
app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});