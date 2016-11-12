
/*var fs = require("fs");
fs.writeFile("simple.txt", "Здесь был Node. Второй раз", function(err, data) {
  if (err) {
    console.log("Ничего не вышло, и вот почему: ", err);
  } else
    console.log("Запись успешна. Все свободны.");
});
fs.readFile("simple.txt", function(error, buffer) {
  if (error)
    throw error;
  console.log("В файле было ", buffer.length, " байт.",
              "Первый байт:", buffer[0]);
});*/
/*
var figlet = require("figlet");
figlet.text("Hello world!", function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});*/
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello!</h1><p>You are response " + " NODE" + " </p>");
  response.end();
});
server.close();
