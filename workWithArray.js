'use strict';

//Функции для нахождения самого длинного слова в строке
/*
function findLongestWord(str) {
 var tempArray = str.split(" ");
 var worldLength = 0;
 var worldName;
    for(var i = 1; i < tempArray.length; i++) {

        if(worldLength < tempArray[i].length) {
            worldLength = tempArray[i].length;
            worldName = tempArray[i];
        }
    }
  console.log(worldLength,worldName);
  return str;
}

console.log(findLongestWord("The quick brown fox jumpeeed over the red lazy dog"));
*/
//console.log("user" || false);

// Хочу сделать чтоб для каждого элемента массива вычислялась его длина,
// после сортировалось по возврастанию и выдавало в консоль последний элемент
/*
function findLongestWord(str) {
 var tempArray = str.split(" ");
 var worldLength = 0;
 var worldName = '';
    for(var i = 0; i < tempArray.length; i++) {
        tempArray[i] = tempArray[i].length;
      //  if(worldLength < tempArray[i].length) {
      //      worldLength = tempArray[i].length;
      //      worldName = tempArray[i];
      //  }
    }
    for(i = 0; i < tempArray.sort().length; i++) {
        worldLength = tempArray[i];
    }
  console.log(worldLength);
  return str;
}

console.log(findLongestWord("The quick brown fox jumpeeed over the red lazy dog"));*/

/* CASE A SENTANCE
function titleCase(str) {
    var words = str.split(" ");

    for(var i = 0; i < words.length; i++)
 {       words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
 }
    return words.join(" ");
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


/// ПРАВИЛЬНО!! БЫЛ ДОПОЛНИТЕЛЬНЫЙ ПРОБЕЛ В КОНЦЕ
function titleCase(str) {
  var splitStr = str.split(" ");
  var news = "";
    for(var i = 0; i < splitStr.length; i++)
        news += splitStr[i].substring(0,1).toUpperCase() +
        splitStr[i].substring(1).toLowerCase() + " ";
  var arrayN = news.split(" ");
  arrayN.pop();
  str = arrayN.join(" ");
  console.log(arrayN);
  return str;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


function titleCase(str) {
  var arr_str = str.split(" ");
  var arr_case = [];
  var new_str = "";

  for (var i in arr_str) {
    arr_case.push(arr_str[i].substring(0,1).toUpperCase() + arr_str[i].slice(1).toLowerCase());
  }

  for (var j in arr_case) {
    new_str += arr_case[j] + " ";
  }
  return new_str;
}

titleCase("sHoRt AnD sToUt");


function titleCase(str) {
  var lowerCase = str.toLowerCase();
  var ArrayOfStrings = lowerCase.split(" ");
  var ArrayOfSubstring;
  var FirstElementOfSubstring;
  var FinalString = [];
  console.log(lowerCase);
  console.log(ArrayOfStrings);
  for(var i = 0; i < (ArrayOfStrings.length); i++){
    ArrayOfSubstring = ArrayOfStrings[i].split("");
    ArrayOfSubstring.push(" ");
    FirstElementOfSubstring = ArrayOfSubstring.shift().toUpperCase();
    ArrayOfSubstring.unshift(FirstElementOfSubstring);
    console.log(ArrayOfSubstring);
    FinalString += ArrayOfSubstring;
    console.log(FinalString);
  }

  return (FinalString.replace(/,/gi, ""));
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); */

/* РАЗБИВАЕМ МАССИВ НА МАССИВЫ С РАЗНОЙ ДЛИНОЙ
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  var x = [];

  for(var i = 0; i < arr.length; i += size) {
    x = arr.slice(i, i + size);
    result.push(x);
  }
  return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));*/
/**/
/*
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var result = arr.slice(howMany, arr.length);
  return result;
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 2));*/
/*
function mutation(arr) {
  var newA = arr[1].toLowerCase().split("");
  var booleans = true;
  for(var i = 0; i < arr[1].length; i++) {
    var bool = arr[0].toLowerCase().indexOf(newA[i]);
    (bool < 0 || booleans === false) ? booleans = false : booleans = true;
  }
  return booleans;
}
console.log(mutation(["hello", "lLg"]));*/

/*
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var result = arr.filter(function(a) {
    var x = Boolean(a);
    if(x) {
        return true;
    } else return false;
  });
  return result;
}

console.log(bouncer([7, "ate", "", null, false, 0, NaN, 9, undefined]));
*/
/*
function destroyer(arr) {
  // Remove all the values
    var args = Array.prototype.slice.call(arguments, destroyer.length);
    var result = arr.filter(function(element){
        var booleans = true;
        for(var i = 0; i < args.length; i++) {
            (args[i] == element || booleans === false) ? booleans = false : booleans = true;
        }
        return booleans;
    });
    return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/
/*
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var counter = 0;
  var result = arr.sort(function(a, b) {
    return a - b;
  });

  var back = result.filter(function(e){
    if(e > num) {
        return true;
    } else {
        counter++;
        return false;
    }
  });
  return counter;
}

console.log(getIndexToIns([2, 5, 10], 16));
*/
/* ROT13
function rot13(str) { // LBH QVQ VG!
  var splitStr = str.split("");

  for(var i in splitStr) {
    if (splitStr[i].match(/[A-M]/gi)) {
      splitStr[i] = splitStr[i].charCodeAt(0);
      splitStr[i] += 13;
    } else if (splitStr[i].match(/[N-Z]/gi)){
      splitStr[i] = splitStr[i].charCodeAt(0);
      splitStr[i] -= 13;
    } else if (splitStr[i].match(/\s|\W/gi)) {
      splitStr[i] = splitStr[i].charCodeAt(0);
    }
    splitStr[i] = String.fromCharCode(splitStr[i]);
  }

  return splitStr.join("");
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!.."));*/
//var string = JSON.stringify([{name: "Georgiy", born: 1986},{name: "Adam", born: 1988},
//                            {name: "Alex", born: 1999}, {name: "Charlie", born: 1922}]);
//var id = JSON.parse(cats.json);
//var anc = JSON.parse(string);
/*function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
    passed.push(array[i]);
  }
  return passed;
}
console.log(filter(anc, function(person) {
  return person.name[0] == "A";
}));
console.log(anc.filter(function(person) {
  return person.born == 1986;
}));
console.log(anc.map(function(person) {
  return person.name;
}));
console.log(anc.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));*/
/* Rotate number and return Max
56789 -> 67895 -> 68957 -> 68579 -> 68597
-----------------------------------------------------------------
var number = 326278643;
var str = String(number).split("");
var count = str.length;
var elem1 = [];
var elem2 = [];
var elem3 = [];
elem3 = elem3.concat(elem3, str);
var elem4 = [];

for (var i = 0; i < count; i++) {
  elem1 = str.shift();
  str.push(elem1);
  elem1 = str.shift();
  elem2.push(elem1);
  elem3 = elem3.concat(elem2, str);
}
elem4 = elem3.slice(0, count).join("");
for (var j = 0; j <= elem3.length; j = j + count) {
  if (Number(elem3.slice(j, j + count).join("")) > Number(elem4)) {
    elem4 = elem3.slice(j, j + count).join("");
  }
}
 Работа без цикла
-----------------------------------------------------------------
elem1 = str.shift();
str.push(elem1);
elem1 = str.shift();
elem2.push(elem1);

elem1 = str.shift();
str.push(elem1);
elem1 = str.shift();
elem2.push(elem1);
//elem3 = elem3.concat(elem2, str);
elem1 = str.shift();
str.push(elem1);
elem1 = str.shift();
elem2.push(elem1);

elem1 = str.shift();
str.push(elem1);
elem1 = str.shift();
elem2.push(elem1);

elem1 = str.shift();
elem2.push(elem1);

console.log(str);
console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(elem4);
console.log(count);
*/
var str = "Argo";
var arr = [str];
console.log("Argo".slice(0, 2));
arr.push(str.slice(0, 2), str.slice(2));
console.log(arr);

var arsr = [0,2,3,4];
console.log([1,2,3,4].every((v, i) => v == arsr[i]));
