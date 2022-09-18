let d = prompt("Введите число. Или не число");
let result;
if (d == "NaN"){
    result = "Неплохо. но NaN - не число"
} else if (isNaN(+d)) {
    result = "Упс, кажется, вы ошиблись"
} else {
    result = ((+d)%2 == 0)? "Число четное" : "Число нечетное"
}
console.log(result);