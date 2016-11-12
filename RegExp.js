console.log(/(\d{2,})/.exec("on 123"));

// Объект Дата с методами getTime, getFullYear,
// getMonth, getDate, getHours, getMinutes,
// ATTENTION Месяцы начинаются с 0 и идут вторым аргументом для объекта
console.log(new Date);
// Если задавать один элемент то выдаёт значение
// даты от 1970 года в миллисекундах
console.log(new Date(-11234000));
/*
var re1 = new RegExp("\d+");
console.log(re1.test("82"));*/
/*
var re2 = /\b\d+ \b\year(ly)? (name|Georgiy|Anna)s?\b (dog|cat)/i;
console.log(re2.exec("in 2016 yearly georgiy cats"));*/
var quotedText = /'(\w+)'/;
console.log(quotedText.exec("she said 'Hello'"));
