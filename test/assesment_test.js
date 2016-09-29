var assert = require("assert");

var mappingTheBill = require('../mapping-the-bill')

describe('mapping the bill', function(){

  it('shoul return a map of the bill', function(){
      var result = {};
    assert.equal(result,mappingTheBill.mappingTheBill('./data-file/ItemisedBill.csv'));
    // assert.deepEqual(weekOne, mappingTheWeeks.mappedWeeks("./data-files/week1.csv"));
  })
});
