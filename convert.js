/*
var convertNumber = function(number, base) {
// Строка с разрядами в нужной системе
  var str = [];
  var exponentA = function(base, exponent) {
    var result = 1;
    str.unshift(result);
    for (var count = 0; count < exponent; count++) {
      result *= base;
      str.unshift(result);
    }
  return result;
  };
  exponentA(base, 20);
 Переводит только в двоичную систему
-----------------------------------------------------------
var number = 1000;
var result = "";
var temp = number;
for (var i = 0; i < str.length; i++) {
if (str[i] <= temp) {
  result += Math.floor(temp / str[i]);
  temp = temp - (str[i] * Math.floor(temp / str[i]));
} else if (str[i] > temp && result.length >= 1) {
  result += String("0");
}
}
console.log(result);
//Переводит в 2ную, 8ную и в 16ную
//var number = 4034;
  var result = "";
  var temp = number;
  for (var i = 0; i < str.length; i++) {
    if (str[i] <= temp) {
      if (Math.floor(temp / str[i]) == 15) {
        result += "F";
      } else if (Math.floor(temp / str[i]) == 14) {
        result += "E";
      } else if (Math.floor(temp / str[i]) == 13) {
        result += "D";
      } else if (Math.floor(temp / str[i]) == 12) {
        result += "C";
      } else if (Math.floor(temp / str[i]) == 11) {
        result += "B";
      } else if (Math.floor(temp / str[i]) == 10) {
        result += "A";
      } else if (Math.floor(temp / str[i]) < 10) {
        result += Math.floor(temp / str[i]);
      }
    temp = temp - (str[i] * Math.floor(temp / str[i]));
    // Записывает там где нужно нули и отбрасывает
    // первые разряды если они не нужны
    } else if (str[i] > temp && result.length >= 1) {
      result += String("0");
    }
  }
  return result;
};
console.log(convertNumber(254274, 2));
*/

//number.toString(16); // Переводит в HEX

var str = '1010101';
console.log(Number.parseInt(str, 2).toString(10));
function binaryAgent(str) {
  var arr = str.split(' ');
  //console.log(arr);
  //console.log(arr[0]);
  //console.log(Number.parseInt(arr[0], 2).toString(10));
  arr = arr.map(x => String.fromCharCode(Number.parseInt(x, 2).toString(10)));
  //console.log(arr.forEach(function(x) {return (Number.parseInt(x, 2)).toString(10)}));
  return console.log(arr.join(''));
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
