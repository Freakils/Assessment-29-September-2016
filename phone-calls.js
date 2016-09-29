// phone calls for a specific provider.
exports.providerSpecificCalls = function(billObject, provider){
  var providerCalls = [];

    billObject.forEach(function(fish){
      if(provider === fish.provider){
        providerCalls.push(fish.cellNum)
      }
    })

    return providerCalls;
};

exports.totalNoOfCalls = function(billObject){
  var totalNoOfCalls = {};

    billObject.forEach(function(calls){
      //console.log(calls.provider);
      if(totalNoOfCalls[calls.provider] === undefined ){
        totalNoOfCalls[calls.provider] = 0;
      }

        totalNoOfCalls[calls.provider] ++
    })
    console.log(totalNoOfCalls);
    return totalNoOfCalls;
};

  // return totalNoOfCallsProv;


// / module.exports = function(tripList) {
//   var earningsForEach = {};
//   tripList.forEach(function(taxi) {
//     var regNum = taxi.RegistrationNumber;
//     var newEarnings = taxi.Fare * taxi.Trips;
//
//     if (earningsForEach[regNum] === undefined) {
//       earningsForEach[regNum] = 0;
//     }
//     earningsForEach[regNum] += newEarnings;
//   // console.log(regNum);
//
//   });
//   return earningsForEach;
// }
