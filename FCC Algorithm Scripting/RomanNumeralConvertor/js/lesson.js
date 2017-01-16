function convertToRoman(num) {
var romainS = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var decimalS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanize = "";
for (var index = 0; index < decimalS.length; index++) {
  while (decimalS[index] <= num) {
    romanize += romainS[index];
    num -= decimalS[index];
  }
}
return romanize;
}
