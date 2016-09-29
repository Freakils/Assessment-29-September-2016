var assert = require("assert");

var mappingTheBill = require('../mapping-the-bill');
var callsForSpecificProvider = require('../phone-calls')


describe('mapping the bill', function() {

  it('shoul return a map of the bill', function() {
    var billObject = [{
      date: '01/10/2015',
      provider: 'MTN',
      cellNum: '0832401145',
      duration: '00-05-34'
    }, {
      date: '01/10/2015',
      provider: 'MTN',
      cellNum: '0838758090',
      duration: '00-01-34'
    }, {
      date: '03/10/2015',
      provider: 'Vodacom',
      cellNum: '0821302398',
      duration: '00-00-34'
    }, {
      date: '03/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-02-34'
    }, {
      date: '03/10/2015',
      provider: 'MTN',
      cellNum: '0832401145',
      duration: '00-06-34'
    }, {
      date: '06/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-05-34'
    }, {
      date: '06/10/2015',
      provider: 'Vodacom',
      cellNum: '0821302398',
      duration: '00-02-04'
    }, {
      date: '06/10/2015',
      provider: 'MTN',
      cellNum: '0838758090',
      duration: '00-01-16'
    }, {
      date: '07/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-03-04'
    }, {
      date: '10/10/2015',
      provider: 'MTN',
      cellNum: '0832401145',
      duration: '00-02-41'
    }, {
      date: '10/10/2015',
      provider: 'MTN',
      cellNum: '0838758090',
      duration: '00-09-11'
    }, {
      date: '10/10/2015',
      provider: 'Vodacom',
      cellNum: '0828907600',
      duration: '00-00h56s'
    }, {
      date: '10/10/2015',
      provider: 'CellC',
      cellNum: '0825605600',
      duration: '00-01-40'
    }, {
      date: '11/10/2015',
      provider: 'MTN',
      cellNum: '0832401145',
      duration: '00-05-34'
    }, {
      date: '12/10/2015',
      provider: 'CellC',
      cellNum: '0825605600',
      duration: '00-01-34'
    }, {
      date: '12/10/2015',
      provider: 'Vodacom',
      cellNum: '0824501276',
      duration: '00-00-34'
    }, {
      date: '13/10/2015',
      provider: 'MTN',
      cellNum: '0838758090',
      duration: '00-02-07'
    }, {
      date: '14/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-06-34'
    }, {
      date: '14/10/2015',
      provider: 'MTN',
      cellNum: '0838758090',
      duration: '00-05-34'
    }, {
      date: '15/10/2015',
      provider: 'MTN',
      cellNum: '0832401145',
      duration: '00-02-39'
    }, {
      date: '15/10/2015',
      provider: 'Vodacom',
      cellNum: '0821005078',
      duration: '00-01-16'
    }, {
      date: '15/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-03-04'
    }, {
      date: '16/10/2015',
      provider: 'MTN',
      cellNum: '0831239023',
      duration: '00-02-41'
    }, {
      date: '16/10/2015',
      provider: 'CellC',
      cellNum: '0845009087',
      duration: '00-09-11'
    }, {
      date: '17/10/2015',
      provider: 'Vodacom',
      cellNum: '0828009712',
      duration: '00-00h56s'
    }, {
      date: '18/10/2015',
      provider: 'MTN',
      cellNum: '0832004576',
      duration: '00-01-40'
    }, {
      date: '21/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-05-34'
    }, {
      date: '21/10/2015',
      provider: 'MTN',
      cellNum: '0831239023',
      duration: '00-01-34'
    }, {
      date: '22/10/2015',
      provider: 'MTN',
      cellNum: '0837351200',
      duration: '00-00-34'
    }, {
      date: '23/10/2015',
      provider: 'Vodacom',
      cellNum: '0828901271',
      duration: '00-02-34'
    }, {
      date: '23/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-06-34'
    }, {
      date: '24/10/2015',
      provider: 'MTN',
      cellNum: '0834590001',
      duration: '00-05-34'
    }, {
      date: '24/10/2015',
      provider: 'CellC',
      cellNum: '0841257809',
      duration: '00-02-04'
    }, {
      date: '24/10/2015',
      provider: 'Vodacom',
      cellNum: '0824009001',
      duration: '00-01-16'
    }, {
      date: '27/10/2015',
      provider: 'MTN',
      cellNum: '0831239023',
      duration: '00-03-04'
    }]
    assert.deepEqual(billObject, mappingTheBill.mappingTheBill('./data-file/ItemisedBill.csv'));
  })
});


var billObject = [{
  date: '01/10/2015',
  provider: 'MTN',
  cellNum: '0832401145',
  duration: '00-05-34'
}, {
  date: '01/10/2015',
  provider: 'MTN',
  cellNum: '0838758090',
  duration: '00-01-34'
}, {
  date: '03/10/2015',
  provider: 'Vodacom',
  cellNum: '0821302398',
  duration: '00-00-34'
}, {
  date: '03/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-02-34'
}, {
  date: '03/10/2015',
  provider: 'MTN',
  cellNum: '0832401145',
  duration: '00-06-34'
}, {
  date: '06/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-05-34'
}, {
  date: '06/10/2015',
  provider: 'Vodacom',
  cellNum: '0821302398',
  duration: '00-02-04'
}, {
  date: '06/10/2015',
  provider: 'MTN',
  cellNum: '0838758090',
  duration: '00-01-16'
}, {
  date: '07/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-03-04'
}, {
  date: '10/10/2015',
  provider: 'MTN',
  cellNum: '0832401145',
  duration: '00-02-41'
}, {
  date: '10/10/2015',
  provider: 'MTN',
  cellNum: '0838758090',
  duration: '00-09-11'
}, {
  date: '10/10/2015',
  provider: 'Vodacom',
  cellNum: '0828907600',
  duration: '00-00h56s'
}, {
  date: '10/10/2015',
  provider: 'CellC',
  cellNum: '0825605600',
  duration: '00-01-40'
}, {
  date: '11/10/2015',
  provider: 'MTN',
  cellNum: '0832401145',
  duration: '00-05-34'
}, {
  date: '12/10/2015',
  provider: 'CellC',
  cellNum: '0825605600',
  duration: '00-01-34'
}, {
  date: '12/10/2015',
  provider: 'Vodacom',
  cellNum: '0824501276',
  duration: '00-00-34'
}, {
  date: '13/10/2015',
  provider: 'MTN',
  cellNum: '0838758090',
  duration: '00-02-07'
}, {
  date: '14/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-06-34'
}, {
  date: '14/10/2015',
  provider: 'MTN',
  cellNum: '0838758090',
  duration: '00-05-34'
}, {
  date: '15/10/2015',
  provider: 'MTN',
  cellNum: '0832401145',
  duration: '00-02-39'
}, {
  date: '15/10/2015',
  provider: 'Vodacom',
  cellNum: '0821005078',
  duration: '00-01-16'
}, {
  date: '15/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-03-04'
}, {
  date: '16/10/2015',
  provider: 'MTN',
  cellNum: '0831239023',
  duration: '00-02-41'
}, {
  date: '16/10/2015',
  provider: 'CellC',
  cellNum: '0845009087',
  duration: '00-09-11'
}, {
  date: '17/10/2015',
  provider: 'Vodacom',
  cellNum: '0828009712',
  duration: '00-00h56s'
}, {
  date: '18/10/2015',
  provider: 'MTN',
  cellNum: '0832004576',
  duration: '00-01-40'
}, {
  date: '21/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-05-34'
}, {
  date: '21/10/2015',
  provider: 'MTN',
  cellNum: '0831239023',
  duration: '00-01-34'
}, {
  date: '22/10/2015',
  provider: 'MTN',
  cellNum: '0837351200',
  duration: '00-00-34'
}, {
  date: '23/10/2015',
  provider: 'Vodacom',
  cellNum: '0828901271',
  duration: '00-02-34'
}, {
  date: '23/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-06-34'
}, {
  date: '24/10/2015',
  provider: 'MTN',
  cellNum: '0834590001',
  duration: '00-05-34'
}, {
  date: '24/10/2015',
  provider: 'CellC',
  cellNum: '0841257809',
  duration: '00-02-04'
}, {
  date: '24/10/2015',
  provider: 'Vodacom',
  cellNum: '0824009001',
  duration: '00-01-16'
}, {
  date: '27/10/2015',
  provider: 'MTN',
  cellNum: '0831239023',
  duration: '00-03-04'
}]
describe('phone calls', function() {

  it('should return all calls for a specific provider MTN', function() {
    var mtnResults = [
      "0832401145",
      "0838758090",
      "0832401145",
      "0838758090",
      "0832401145",
      "0838758090",
      "0832401145",
      "0838758090",
      "0838758090",
      "0832401145",
      "0831239023",
      "0832004576",
      "0831239023",
      "0837351200",
      "0834590001",
      "0831239023"
    ];
    assert.deepEqual(callsForSpecificProvider.providerSpecificCalls(billObject, 'MTN'), mtnResults);
  })

  it('should return all calls for a specific provider Vodacom', function() {
    var vodacomResults = [
      "0821302398",
      "0821302398",
      "0828907600",
      "0824501276",
      "0821005078",
      "0828009712",
      "0828901271",
      "0824009001"
    ];
    assert.deepEqual(callsForSpecificProvider.providerSpecificCalls(billObject, 'Vodacom'), vodacomResults);
  })

  it('should return all calls for a specific provider CellC', function() {
    var cellCResults = [
      "0841257809",
      "0841257809",
      "0841257809",
      "0825605600",
      "0825605600",
      "0841257809",
      "0841257809",
      "0845009087",
      "0841257809",
      "0841257809",
      "0841257809"
    ];
    assert.deepEqual(callsForSpecificProvider.providerSpecificCalls(billObject, 'CellC'), cellCResults);
  })

});

describe('total number of calls for each provider', function() {

  it('shoul return total number of call to MTN', function() {
    assert.deepEqual(callsForSpecificProvider.totalNoOfCalls(billObject), {
      "MTN": 16,
      "Vodacom": 8,
      "CellC": 11
    });

  })

});
