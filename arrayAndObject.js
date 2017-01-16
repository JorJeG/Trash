'use strict';
/*
var listOfNumbers = [[1, "wear"], 2, 10, 12];
var newObject = [{
  width: 300,
  height: 200,
  title: "Menu",
  name: "Anna"
},
{
  width: 300,
  height: 200,
  title: "Menu"
},
{
  width: 300,
  height: 200,
  title: "Menu"
},
{
  width: 300,
  height: 200,
  title: "Menu"
}

];
var counter = 0;
for(var prop in newObject[1]) {
	console.log(newObject[0][prop]);
}

//console.log();
*/

/* СУММА ДИАПАЗОНА
	Написать функцию range, принимающую два аргумента - начало
	и конец диапазона - и возвращающую массив, который содержит
	все числа из него, включая начальное и конечное.

	Затем написать функцию sum, принимающую массив чисел
	и возвращаюзую их сумму. Запустите указанную выше инструкцию
	и убедитесь, что она возвращает 55.

	В качестве бонуса дополните функцию range, чтобы она могла
	принимать необязательный третий аргумент - шаг для построения
	массива. Если он не задан, шаг равен единице. Вызов функции
	range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь
	что она работает с отрицательными шагом, что вызов
	range(5, 2, -1) возвращает [5, 4, 3, 2].

*/

/* ОБРАЩАЕМ ВСПЯТЬ МАССИВ

*/

/* СПИСОК

*/

/* ГЛУБОКОЕ СРАВНЕНИЕ

*/
function myReplace(str, before, after) {
  if (before.match(/^[A-Z]/)) {
    var first = after.substring(0,1).toUpperCase();
    after = first + after.substring(1);
  }
  var regExp = new RegExp(before, "gi");
  var newstr = str.replace(regExp, after)
  return newstr;

}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
