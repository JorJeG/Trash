'use strict'
/*var rabbit = {name: "Леонард"};
rabbit.speak = function(line) {
  console.log("Кролик " + this.name +" говорит '" + line + "'");
};
rabbit.speak("Я живой!");
var speakAndDream = {speak: function(line) {
  console.log("A " + this.type + " кролик говорит: " + line);
},
          dream: function(line) {
  console.log("И мечтает " + line);
          }};
var whiteRabbit = Object.create(speakAndDream);
whiteRabbit.type = "белый";
whiteRabbit.speak("Привет!");
whiteRabbit.dream("о звёздах.");

/* 888 КОНСТРУКТОР 888
-----------------------------------------------------------
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("убийственный");
var blackRabbit = new Rabbit("черный");
// Записываем в конструктор стандартное значение для всех
Rabbit.prototype.teeth = "мелкие";
Rabbit.prototype.sayHello = function() {
  console.log(this.type + " кролик говорит: Hello");
}
console.log(killerRabbit.teeth);
// Локально только для определёного кролика БЕЗ prototype
blackRabbit.saiHi = function(line) {
  console.log(line);
};
blackRabbit.saiHi("Hi");
// смотреть дерево объекта
console.log(Object.prototype.toString.call(Rabbit.prototype.teeth));*/
/*
Object.prototype.colorRabbit = function() {
  return "Этот " + this.animal + " белый. " +
         "И ему " + this.age + " лет";
};
console.log({"animal": "кролик", "age": "5"}.colorRabbit());

Array.prototype.addFour = function() {
  var num = [];
  for (var i = 0; i < this.length; i++) {
    num.push(this[i] + 4);
  }
  return num;
}
console.log([5, 4, 1].addFour());
*/
/*
var map = Object.create(null);
var map = {"пицца": 54, "кекс": 55};
for (var name in map) console.log(name);
console.log("пицца" in map);*/
