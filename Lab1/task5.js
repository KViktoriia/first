let Tc = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));
let Tf = (9/5) * Tc + 32;

alert(Tc + "°C відповідає " + Tf.toFixed(2) + "°F");