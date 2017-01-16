function translatePigLatin(str) {
  var regexp = /^[^aeuio]+/;
  if (str.match(regexp)) {
    var result1 = str.match(regexp);
    var length = result1[0].length;
    var repl = str.slice(0,length);
    str = str.slice(length) + repl + "ay";
  } else {
    str += "way";
  }
  return str;
}
