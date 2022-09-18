

//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let arr = [111,"asdf",true];
console.log(arr.length);
arr.map(function(item,index,array)
{
    console.log(item);
});