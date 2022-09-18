//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль
let arr = [111,111,111];
let isEqual = true;
i = 0;
while (isEqual && i < (arr.length-1)){
    isEqual = arr[i]===arr[i+1];
    i+1;
}
console.log(isEqual);

