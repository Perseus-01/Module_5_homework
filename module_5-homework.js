


//Задание 1

let value = prompt('Введите значение');
value = +value;


if (typeof value != 'number') {
  alert('Упс, кажется, вы ошиблись');
}

else if (isNaN(value)) {
  alert('Упс, кажется, вы ошиблись'); 
}

else if (value % 2 === 0){
  alert('Это четное число');
}

else {
  alert('Это нечетное число');
}


//Задание 2
let x = prompt('Введите значение X');

if (typeof x === 'number') {
	alert(x + ' - число');
}

else if (typeof x === 'string') {
	alert(x + ' - строка');
}

else if (typeof x === 'boolean') {
	alert(x + 'Логический тип');
}

else {
	alert('Тип x не определён');
}

// Почему-то во втором задании везде выдает, что это строка.


//Задание 3
//

let str = "Hello";
str = str.split("").reverse().join("");
console.log(str);


//Задание 4

function randomInteger(min, max) {
  let randomInteger = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInteger);
}

console.log( randomInteger(0, 100) );


//Задание 5

let arr = ['one', 'two', 'three'];

alert(`Длина массива: ${arr.length} элемента`);

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

//Задание 6

let arr = ['alpha', 'beta', 'gamma', 'delta'];

for (let i = 0; i < 3; i = i + 1) {
  if(arr[i] === arr[i]){
   alert(true);
 }

 else {
  alert(false);
}
}



//Задание 7     

let even = 0;
let odd = 0;
let zero = 0; 
let str = 0; 
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'orange', 'apple', 'pineapple'];

for(i = 0; i < array.length; i++) {
  if(typeof array[i] == 'number'){
    if(array[i] % 2 == 0 && array[i] != 0){
      even += 1}
      else if (array[i] % 2 != 0){
        odd += 1
      } 
      else if (array[i] === 0) {
        zero += 1;
      } 
      console.log(`Четных чисел - ${even}, нечетных чисел - ${odd}, нулей - ${zero}`) 
    }
else if (typeof array[i] == 'string'){
}
    console.log(`Строк - ${str}`) 
  }
  
//Сложное задание, смотрел решения других студентов. Не уверен насчет частей even+=1, odd+=1, zero+=1.



//Задание 8   

let myMap = new Map();
myMap.set('first-key', 'first property');
myMap.set(2, 'second property');
myMap.set(true, 'third property');

for (let [key, value] of myMap){

  console.log(`Ключ — ${key}, значение — ${value}`)
}



