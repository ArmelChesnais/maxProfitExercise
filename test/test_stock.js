var assert = require("chai").assert;
var maxProfit = require("../lib/stock");

describe("Stock", function() {
  it("should return 16", function() {
    var stocks = [45, 24, 35, 31, 40, 38, 11];
    assert.equal(maxProfit(stocks), 16, "max profit should be 16");
  });

  it("should return -1", function() {
    var stocks = [52, 49, 42, 39, 24, 16, 15];
    assert.equal(maxProfit(stocks), -1, "Profit amount should be -1");
  });

  it("should return -1", function() {
    var stocks = [52, 49, 42, 42, 24, 16, 15];
    assert.equal(maxProfit(stocks), -1, "Profit amount should be -1");
  });

  it("should return -1", function() {
    var stocks = [5, 5, 5, 5, 5, 5, 5, 5, 5];
    assert.equal(maxProfit(stocks), -1, "Profit amount should be -1");
  });

  it("should return 7", function() {
    var stocks = [1, 5, 2, 6, 5, 7, 5, 8];
    assert.equal(maxProfit(stocks), 7, "Profit amount should be 7");
  });

  it("should return 3", function() {
    var stocks = [5, 4, 3, 2, 2, 3, 4, 5];
    assert.equal(maxProfit(stocks), 3, "Profit amount should be 3");
  });

  it("should return 3", function() {
    var stocks = [2, 3, 4, 5, 5, 4, 3, 2];
    assert.equal(maxProfit(stocks), 3, "Profit amount should be 3");
  });

});