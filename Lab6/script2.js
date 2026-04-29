class PowerPlant {
    constructor(mw) {
        this.mw = mw;
    }
    getProduction(isDay) {
        return this.mw;
    }
}

class SolarPanel {
    constructor(mw) {
        this.mw = mw;
    }
    getProduction(isDay) {
        return isDay ? this.mw : 0;
    }
}

class Building {
    constructor(apartments) {
        this.apartments = apartments;
    }
    getConsumption(isDay) {
        let kwPerApt = isDay ? 4 : 1;
        return (this.apartments * kwPerApt) / 1000;
    }
}

class TransmissionLine {
    constructor(capacity, price) {
        this.capacity = capacity;
        this.price = price;
    }
}

class Grid {
    constructor() {
        this.elements = [];
        this.lines = [];
    }

    addElement(el) {
        this.elements.push(el);
    }

    addLine(line) {
        this.lines.push(line);
    }

    calculate(isDay) {
        let totalProd = 0;
        let totalCons = 0;

        this.elements.forEach(el => {
            if (el.getProduction) totalProd += el.getProduction(isDay);
            if (el.getConsumption) totalCons += el.getConsumption(isDay);
        });

        let balance = totalProd - totalCons;
        let money = 0;
        let remaining = Math.abs(balance);

        if (balance < 0) {
            this.lines.sort((a, b) => a.price - b.price);
            for (let line of this.lines) {
                let buy = Math.min(remaining, line.capacity);
                money -= buy * line.price;
                remaining -= buy;
                if (remaining <= 0) break;
            }
        } else {
            this.lines.sort((a, b) => b.price - a.price);
            for (let line of this.lines) {
                let sell = Math.min(remaining, line.capacity);
                money += sell * line.price;
                remaining -= sell;
                if (remaining <= 0) break;
            }
        }

        return {
            type: balance < 0 ? "закупівля" : "продаж",
            amount: Math.abs(balance).toFixed(2),
            cost: money.toFixed(2)
        };
    }
}

const myGrid = new Grid();
myGrid.addElement(new PowerPlant(50));
myGrid.addElement(new SolarPanel(5));
myGrid.addElement(new Building(200));
myGrid.addLine(new TransmissionLine(100, 15));

const dayRes = myGrid.calculate(true);
const nightRes = myGrid.calculate(false);

console.log(`Вдень: ${dayRes.type} ${dayRes.amount} МВт, бюджет: ${dayRes.cost}`);
console.log(`Вночі: ${nightRes.type} ${nightRes.amount} МВт, бюджет: ${nightRes.cost}`);