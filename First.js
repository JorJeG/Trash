'use strict'
/*---------
-----------------------------------------------
function pairElement(str) {
  var pair = [["A","T"],["T","A"],["C","G"],["G","C"]];
  var array = str.split("");
  for (var key in array) {
    switch (array[key]) {
      case "G":
        array[key] = pair[3];
        break;
      case "C":
        array[key] = pair[2];
        break;
      case "A":
        array[key] = pair[0];
        break;
      case "T":
        array[key] = pair[1];
        break;
    }
  }
  return array;
}

console.log(pairElement("ATCGA"));
*/
/*---------
-----------------------------------------------
function fearNotLetter(str) {
  var length = str.length;
  var startIndex = str.charCodeAt(0);
  var endIndex = str.charCodeAt(length - 1);
  var temp = "";
  for (var i = startIndex; i <= endIndex; i++) {
    temp += String.fromCharCode(i);
  }
  var regexp = new RegExp("[^"+str+"]","g");
  var result = temp.match(regexp);
  return (result === null) ? result = undefined : String(result);
}

console.log(fearNotLetter("abcdfg"));

function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
console.log(fearNotLetter("abcefg"));*/
/*---------
-----------------------------------------------
function uniteUnique(...arr) {
  var full = arr;
  var result = [];
  full = full.reduce(function(a,b) {
    return a.concat(b);
  });
  for (var i = 0; i < full.length; i++) {
      if (!result.includes(full[i])) {
        result.push(full[i]);
      }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/
/*---------
-----------------------------------------------
function convertHTML(str) {
  var regexp = new RegExp(/[$&"'<>]/, "g");
  return str.replace(regexp, function(x) {
    if (x == "&") return '&amp;' ;
    if (x == "<") return '&lt;' ;
    if (x == ">") return '&gt;' ;
    if (x == "'") return '&apos;' ;
    if (x == '"') return '&quot;' ;
  })
}
console.log(convertHTML("Shindler<>&vart f"));*/
/*---------
-----------------------------------------------
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re1 = new RegExp(/[A-Z]/, "g");
  var re2 = new RegExp(/[_]|[-]{2}/, "g");

  function replacer(match, p1) {
    if (p1 !== 0) return "-" + match.toLowerCase();
    else return match.toLowerCase();
  }
  str = str.replace(re1, replacer);
  str = str.replace(/\s/g, "-");
  function replacer2(match, p1) {
    if (match === "_") return "";
    else return "-";
  }
  return str.replace(re2, replacer2);
}

console.log(spinalCase("The_Andy_Griffith_Show"));
*/
/*---------
-----------------------------------------------
function fibonachi(num) {
  var fibonachi = [1,1];
  while (fibonachi[fibonachi.length - 1] < num) {
    fibonachi.push(fibonachi[fibonachi.length - 1] + fibonachi[fibonachi.length - 2]);
    if (fibonachi[fibonachi.length - 1] > num) {
      fibonachi.pop();
      break;
    }
  }
  return fibonachi.filter(a => a % 2 !== 0).reduce((a, b) => a + b);
}
console.log(fibonachi(1000));
*/
/*---------
-----------------------------------------------
function sumPrimes(num) {
  var numbers = [];
  for (var i = 2; i <= num; i++) {
    numbers.push(i);
  }
  return numbers.filter(function(num)  {
    var res = true;
    for (var i = 2; i < num; i++) {
      if (num % i != 0 && res === true) {
        res = true;
      } else res = false;
    }
    return res;
  }).reduce((a,b) => a+b);
}

console.log(sumPrimes(977));
*/
// нужно написать общее кратное для всех чисел в промежутке
/*
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
*/
var n = (function foo(x) {
  return 42;
})();
console.log(n);
