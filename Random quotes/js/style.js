/*$(function() {
  $("p#lastP").css("color","red");

  $("h2").click(function() {
    $("h2").css("color","red");
    $("body").css("background-color","#3c5")
  });

  $("p").click(function() {
  $("p").animate({
    'font-size': '17px'
  }, '100', 'linear').animate({
    'font-size': '15px'
  }, '25', 'linear')});
});*/
/* методы
- document.body.getElementsByClassName - поиск по заданному классу
- document.body.getElementsByTagName - поиск по заданному тэгу
- document.getElementById - поиск по ID
---------------------------------------------------------------------*/
//var nav = document.body.getElementsByTagName("nav");
var link = document.body.getElementsByTagName("a");
//document.body.insertBefore(mmain[0], nav[0]);
for (var i = link.length - 1; i >= 0; i--) {
  var lin = link[i];
  var text = document.createTextNode(link[i].href);
  lin.parentNode.replaceChild(text, lin);
}
/* Добавление строки с нужными элементом
---------------------------------------------------------------------*/
function elt(type) {
  var node = document.createElement(type);
  for (var i = 1; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}
document.getElementById('last').appendChild(elt("strong", " Who am I?"));
/* Показывает расположение элемента в браузере
---------------------------------------------------------------------*/
var quot = document.body.getElementsByTagName('blockquote')[0];
console.log(quot.getBoundingClientRect());
