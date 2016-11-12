'use strict';
/*
var symbol = "#";

// С помощью цикла for
for(var i = 0; ; i++) {
	if(symbol.length <= 7) {
		console.log(symbol);
		symbol += "#";
	} else break;
}

// С помощью цикла While
while(symbol.length <= 7) {
	console.log(symbol);
	symbol += "#";
}*/

/* Написать программу которая выводит
в консоль все числа от 1 до 100
Для чисел, начело делящихся на 3,
она должна выводить "Fizz", а для чисел,
делящихся на 5 (но не на 3) - "Buzz".

Исправить её так, чтобы она выводила "FizzBuzz" для 
всех чисел, которые делятся и на 3, и на 5. 

var oneBuzz = "Buzz", oneFizz = "Fizz";
for(var i = 1; i <= 100; i++) {
	(i % 5 == 0 || i % 3 == 0) ? console.log(oneFizz + oneBuzz) :

//	(i % 5 == 0 && i % 3 != 0) ? console.log(oneBuzz) : 
//	(i % 3 == 0) ? console.log(oneFizz) :

	console.log(i);
	
}*/

/* Написать программу создающую строку, 
содержащую решётку 8х8, в которой линии 
разделяются символами новой строки. На каждой 
позиции либо пробел, либо #. В результате должна
получиться шахматная доска.

Когда справитесь, сделайте размер доски переменным, 
чтобы можно было создавать доски любого размера. 

var firstSymbol = "#", secondSymbol = " ", stroke = "";
var strokeLength = 8, arrayLength = 8;
for(var j = 0; j < arrayLength; j++) {
for(var i = 0; ; i++) {
	if (stroke.length <= strokeLength) {
		stroke += firstSymbol + secondSymbol;
	} else break;
}
if(j % 2 == 0) {
	console.log(stroke);
} else console.log(" " + stroke);
	
}
*/
/*  ПОИСК САМОГО БОЛЬШОГО ЧИСЛА
var array = [[13, 6, 9 , -1],
			 [1, 8, 3, 0, 111],
			 [100, -10, 5, 9, 25],
			 [11, -10, 5, 9]];

var sum = [];

var resultArray = array.map (function(item) {
//for(var i = 0; i < item.length; i++) {
//	var high = [];
//	high = item[i].sort(function(a, b) {
//			return a - b;
//		}).pop();
	var high = 0;
	for(var i = 0; i < item.length; i++) {		
		(item[i] > high) ? high = item[i] : high = high;
	}
	return high;
}
)
console.log(resultArray);
*/
/*
function getNumberFromString(s) {
  var regexp = /\D+/g;
//  var result = s.match(regexp);
  var result = s.replace(regexp, "");
  return result;
}

console.log(getNumberFromString("The5 Goo7d"));*/
/*
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var tar = target.length
  var result;
  if (str.substr(-target.length, target.length) == target) {
  	result =  true;
  } else result = false;
  console.log(str.substr(-4, 4));
  return result;
}

console.log(confirmEnding("Bastianame", ""));*/

function opposite(number) {return -number};
console.log(opposite(34));