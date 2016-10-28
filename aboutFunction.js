'use strict';
/*
var landscape = function() {
	var result = "";
	var flat = function(size) {
		for(var count = 0; count < size; count++)
			result += "_";
	};
	var mountain = function(size) {
		result += "/";
		for(var count = 0; count < size; count++)
			result += "'";
		result += "\\";
	};
	
	mountain(5);
	flat(2);
	mountain(1);
	flat(4);
	return result;
};

console.log(landscape());
*/
/* -- ЗАМЫКАНИЕ -- РАБОТАЕТ ТАКЖЕ КАК И ДВА ПАРАМЕТРА, ПОЧЕМУ?
function multiplier(factor) {
	return function(number) {
		return number[factor];
	};
}
var twice = multiplier(3);
console.log(twice("1, 3, 2"));
--ДВА ПАРАМЕТРА--
function multipier(string, factor) {
	return string[factor];
}

console.log(multipier('solo', 2))
*/
/*
Написать функцию min, 
принимающую два аргумента и возвращающую минимальный из них

function minimum(a, b) {
	var result;
	(a > b) ? result = b : result = a;
	return result;
}
console.log(minimum(9, 5));
console.log(Math.max(-1, 5));
*/
/*
Написать функцию countBs, которая принимает строку в качестве аргумента,
и возвращает количество символов "B" содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно 
как countBs только принимает параметр - символ, который мы будем 
искать в строке (вместо того, чтобы просто считать количество символов В).

function countChar(char) {
 return function(string) {
	var countB = 0;
	for(var count = 0; count < string.length; count++)
		(string.charAt(count) == char) ? countB++ : countB;
	return countB;
};
}
//console.log(countBs("Bob is Bobby", "B"));
var countSim = countChar("a");
console.log(countSim("Daddy is black bbbblack man"));
*/

/* Добавление любых символов к числу с заданной шириной 
function zeroPad (number, width) {
	var string = String(number);
	while (string.length < width)
		string = "0" + string;
	return string;
}

function hourAndMinute(hour, minute) {
	console.log(zeroPad(hour, 2) + ":" + zeroPad(minute, 2));
}

hourAndMinute(2, 50);
*/
