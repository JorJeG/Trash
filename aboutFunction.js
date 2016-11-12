'use strict';
/* Так мы загрязняем глобальное пространство имён
-------------------------------------------------
var names = ["Понедельник",
             "Вторник",
             "Среда",
             "Четверг",
             "Пятница",
             "Суббота",
             "Воскресенье"];
function dayName(number) {
  return names[number];
}*/

/* Лучше писать функции с локальными переменными
-------------------------------------------------
var dayName = function() {
  var names = ["Понедельник",
               "Вторник",
               "Среда",
               "Четверг",
               "Пятница",
               "Суббота",
               "Воскресенье"];
  return function(number) {
    return names[number];
  };
}();
console.log(dayName(3));*/
/*///  НЕ РАБОТАЕТ !!!!!!!!!
(function(exports) {
  var names = ["Понедельник",
               "Вторник",
               "Среда",
               "Четверг",
               "Пятница",
               "Суббота",
               "Воскресенье"];
  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});
console.log(weekDay.name(0));*/
/*
var weekDay = function() {
  var names = ["Понедельник",
               "Вторник",
               "Среда",
               "Четверг",
               "Пятница",
               "Суббота",
               "Воскресенье"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();
console.log(weekDay.name(0));*/

/* Так как это не функциональное выражение,
используем трюк - заключаем функцию в круглые скобки
Теперь функция принудительно интерпретируется как
выражение
-------------------------------------------------
(function() {
  function square(x) { return x * x; }
  var hundred = 200;

  console.log(square(hundred));
})();*/

/* Рисуем горы и равнины
--------------------------------------------------------
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
--------------------------------------------------------
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
--------------------------------------------------------
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
--------------------------------------------------------
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
/*function greaterThan(n) {
  return function(m) {return m + n};
}
console.log(greaterThan(10)(3));*/

/* Перевод числа в строку и
в нужную систему счисления
-------------------------------------
function numberToSttring(n, base) {
  var result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}
console.log(numberToSttring(13,10));*/
/*
var plusOne = new Function("n", "return n + 1;");
console.log(plusOne(4));
(function(exports) {
  var names = ["Понедельник",
               "Вторник",
               "Среда",
               "Четверг",
               "Пятница",
               "Суббота",
               "Воскресенье"];
  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});
function require(name) {
  var code = new Function("exports", readFile(name));
  var exports = {};
  code(exports);
  return exports;
}
console.log(require("weekDay").name(1));*/
/*
function findSmallestLength(s) {
  var tempArray = s.split(" ").sort(function(a, b) {
    return a.length - b.length;
  });
  return tempArray[0].length;
}
console.log(findSmallestLength("turns out random test cases are easier than writing out basic ones 43"));
*/
(var weekDay = function(exports) {
  var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});

console.log(weekDay.number("Пятница"));
