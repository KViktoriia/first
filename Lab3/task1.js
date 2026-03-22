// 1. Налаштування body
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#000";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Arial, sans-serif";

// 2. Створення контейнера калькулятора
const calculator = document.createElement('div');
Object.assign(calculator.style, {
    width: "320px",
    backgroundColor: "#000",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
});
document.body.appendChild(calculator);

// 3. Створення дисплею
const display = document.createElement('div');
Object.assign(display.style, {
    color: "#fff",
    fontSize: "60px",
    textAlign: "right",
    padding: "20px 10px",
    marginBottom: "10px",
    fontWeight: "300",
    overflow: "hidden",
    whiteSpace: "nowrap"
});
display.innerText = "0"; 
calculator.appendChild(display);

// 4. Опис кнопок
const buttons = [
    { label: 'AC', color: '#a5a5a5', textColor: '#000' },
    { label: '+/-', color: '#a5a5a5', textColor: '#000' },
    { label: '%', color: '#a5a5a5', textColor: '#000' },
    { label: '÷', color: '#ff9f0a', textColor: '#fff' },
    { label: '7', color: '#333', textColor: '#fff' },
    { label: '8', color: '#333', textColor: '#fff' },
    { label: '9', color: '#333', textColor: '#fff' },
    { label: '×', color: '#ff9f0a', textColor: '#fff' },
    { label: '4', color: '#333', textColor: '#fff' },
    { label: '5', color: '#333', textColor: '#fff' },
    { label: '6', color: '#333', textColor: '#fff' },
    { label: '-', color: '#ff9f0a', textColor: '#fff' },
    { label: '1', color: '#333', textColor: '#fff' },
    { label: '2', color: '#333', textColor: '#fff' },
    { label: '3', color: '#333', textColor: '#fff' },
    { label: '+', color: '#ff9f0a', textColor: '#fff' },
    { label: '0', color: '#333', textColor: '#fff', wide: true },
    { label: '.', color: '#333', textColor: '#fff' },
    { label: '=', color: '#ff9f0a', textColor: '#fff' }
];

// 5. Контейнер для кнопок (сітка)
const buttonsGrid = document.createElement('div');
Object.assign(buttonsGrid.style, {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px"
});
calculator.appendChild(buttonsGrid);

let currentInput = "0";

// 6. Створення кнопок та логіка кліків
buttons.forEach(btnData => {
    const btn = document.createElement('div');
    btn.innerText = btnData.label;
    
    Object.assign(btn.style, {
        height: "70px",
        borderRadius: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        cursor: "pointer",
        backgroundColor: btnData.color,
        color: btnData.textColor,
        userSelect: "none",
        transition: "opacity 0.1s"
    });

    if (btnData.wide) {
        btn.style.gridColumn = "span 2";
        btn.style.justifyContent = "flex-start";
        btn.style.paddingLeft = "30px";
    }

    btn.onmousedown = () => btn.style.opacity = "0.7";
    btn.onmouseup = () => btn.style.opacity = "1";

// 7. Обчислення
    btn.onclick = () => {
        const parts = currentInput.split(/[\+\-\×\÷]/);
        const lastNumber = parts[parts.length - 1];

        if (btnData.label === "AC") {
            currentInput = "0";
        } 
        else if (btnData.label === "+/-") {
            if (lastNumber !== "" && lastNumber !== "0") {
                const prefix = currentInput.substring(0, currentInput.length - lastNumber.length);
                currentInput = prefix + (parseFloat(lastNumber) * -1).toString();
            }
        } 
        else if (btnData.label === "%") {
            if (parts.length > 1 && lastNumber !== "") {
                const operator = currentInput[currentInput.length - lastNumber.length - 1];
                const firstNumber = parseFloat(parts[parts.length - 2]);
                const percentValue = (firstNumber * parseFloat(lastNumber) / 100);
                
                const prefix = currentInput.substring(0, currentInput.length - lastNumber.length);
                currentInput = prefix + percentValue.toString();
            } else {
                currentInput = (parseFloat(lastNumber) / 100).toString();
            }
        } 
        else if (btnData.label === "=") {
            try {
                let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                currentInput = Number(result.toFixed(10)).toString();
            } catch {
                currentInput = "Error";
            }
        } 
        else if (["+", "-", "×", "÷"].includes(btnData.label)) {
            const lastChar = currentInput.slice(-1);
            if (["+", "-", "×", "÷"].includes(lastChar)) {
                currentInput = currentInput.slice(0, -1) + btnData.label;
            } else {
                currentInput += btnData.label;
            }
        }
        else if (btnData.label === ".") {
            if (!lastNumber.includes(".")) {
                currentInput += ".";
            }
        }
        else {
            if (currentInput === "0") {
                currentInput = btnData.label;
            } else {
                currentInput += btnData.label;
            }
        }

        display.innerText = currentInput;
    };

    buttonsGrid.appendChild(btn);
});

// 7. Адаптивність
function makeResponsive() {
    const width = window.innerWidth;
    if (width < 450) {
        calculator.style.transform = "scale(0.8)";
    } else if (width < 850) {
        calculator.style.transform = "scale(1)";
    } else {
        calculator.style.transform = "scale(1.2)";
    }
}

window.addEventListener('resize', makeResponsive);
makeResponsive();