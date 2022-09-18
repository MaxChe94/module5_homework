//Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

let a = [111,111,111];
even = odd = j = 0;
a.forEach((element,index) => {
    if (typeof(element)=='number'){
        if (element == 0) {
            console.log("array["+index+"] = "+element);
            even=even+1;
        } else if (element%2 == 0)
        even=even+1 
        else 
        odd=odd+1
    }
  })
console.log("even = "+even+" odd = "+odd);