var assert = require("assert");

var mappingTheBill = require('../mapping-the-bill')

describe('mapping the bill', function() {

  it('shoul return a map of the bill', function() {
    var billMap = {
      '0832401145': 'MTN',
      '0838758090': 'MTN',
      '0821302398': 'Vodacom',
      '0841257809': 'CellC',
      '0828907600': 'Vodacom',
      '0825605600': 'CellC',
      '0824501276': 'Vodacom',
      '0821005078': 'Vodacom',
      '0831239023': 'MTN',
      '0845009087': 'CellC',
      '0828009712': 'Vodacom',
      '0832004576': 'MTN',

      '0837351200': 'MTN',
      '0828901271': 'Vodacom',
      '0834590001': 'MTN',
      '0824009001': 'Vodacom'
    };
    assert.deepEqual(billMap, mappingTheBill.mappingTheBill('./data-file/ItemisedBill.csv'));
  })
});
