const a = +prompt(`Введите число`);
const b = +prompt(`Введите второе число`);

// 1.
result = (a === 0) ? alert(`Правильно`) : alert(`Неправильно`);
// 2.
result = (a > 0) ? alert(`Правильно`) : alert(`Неправильно`);
// 3.
result = (a < 0) ? alert(`Правильно`) : alert(`Неправильно`);
// 4.
result = (a >= 0) ? alert(`Правильно`) : alert(`Неправильно`);
// 5.
result = (a <= 0) ? alert(`Правильно`) : alert(`Неправильно`);
// 6.
result = (a !== 0) ? alert(`Правильно`) : alert(`Неправильно`);
//7.
result = (a === isNaN`test`) ? alert(`Правильно`) : alert(`Неправильно`);
// 8.
result = (a === isNaN`1`) ? alert(`Правильно`) : alert(`Неправильно`);
// 9.
result = (a > 0 && a < 5) ? alert(`Правильно`) : alert(`Неправильно`);

// 10.
if (a === 0 || a === 2) {
    alert(a + 7);
} else {
    alert (a / 10);
}

//11.
if (a <= 1 && b >= 3) {
    alert (a + b);
} else {
    alert (a - b);
}

// 12.
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    alert (`Верно`);
} else {
    alert (`Неверно`);
}

// 13.
const num = +prompt(`Введите число: 1, 2, 3 4?`);

switch (num) {
    case 1:
        alert (`Зима`);
        break;
    case 2:
        alert (`Весна`);
        break;
    case 3:
        alert(`Лето`);
        break;
    case 4:
        alert(`Осень`);
        break;
}









