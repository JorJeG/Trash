describe("Convert the given number into a roman numeral.", function() {
  it("should return an string", function() {
    assert.isString(convertToRoman(2));
  });

  it("convert 2", function() {
    assert.equal(convertToRoman(2), "II");
  });
  it("convert 3", function() {
    assert.equal(convertToRoman(3),"III");
  });
  it("convert 4", function() {
    assert.equal(convertToRoman(4),"IV");
  });
  it("convert 5", function() {
    assert.equal(convertToRoman(5), "V");
  });
  it("convert 9", function() {
    assert.equal(convertToRoman(9), "IX");
  });
  it("convert 12", function() {
    assert.equal(convertToRoman(12), "XII");
  });
  it("convert 16", function() {
    assert.equal(convertToRoman(16), "XVI");
  });
  it("convert 29", function() {
    assert.equal(convertToRoman(29), "XXIX");
  });
  it("convert 44", function() {
    assert.equal(convertToRoman(44), "XLIV");
  });
  it("convert 45", function() {
    assert.equal(convertToRoman(45), "XLV");
  });
  it("convert 68", function() {
    assert.equal(convertToRoman(68), "LXVIII");
  });
  it("convert 83", function() {
    assert.equal(convertToRoman(83), "LXXXIII");
  });
  it("convert 97", function() {
    assert.equal(convertToRoman(97), "XCVII");
  });
  it("convert 99", function() {
    assert.equal(convertToRoman(99), "XCIX");
  });
  it("convert 500", function() {
    assert.equal(convertToRoman(500), "D");
  });
  it("convert 501", function() {
    assert.equal(convertToRoman(501), "DI");
  });
  it("convert 649", function() {
    assert.equal(convertToRoman(649), "DCXLIX");
  });
  it("convert 798", function() {
    assert.equal(convertToRoman(798), "DCCXCVIII");
  });
  it("convert 891", function() {
    assert.equal(convertToRoman(891), "DCCCXCI");
  });
  it("convert 1000", function() {
    assert.equal(convertToRoman(1000), "M");
  });
  it("convert 1004", function() {
    assert.equal(convertToRoman(1004), "MIV");
  });
  it("convert 1006", function() {
    assert.equal(convertToRoman(1006), "MVI");
  });
  it("convert 1023", function() {
    assert.equal(convertToRoman(1023), "MXXIII");
  });
  it("convert 2014", function() {
    assert.equal(convertToRoman(2014), "MMXIV");
  });
  it("convert 3999", function() {
    assert.equal(convertToRoman(3999), "MMMCMXCIX");
  });
});
/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/
