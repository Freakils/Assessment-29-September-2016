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
    // console.log(totalNoOfCalls);
    return totalNoOfCalls;
};

exports.durationInSeconds = function(duration){
  // var durationList = [];

  // billObject.forEach(function(calls){
    var callDuration = duration.split('-');
    var durationInSec = Number(callDuration[0]*3600) + Number(callDuration[1]*60) + Number(callDuration[2]);
      // console.log(durationInSec);

      // durationList.push(durationInSec);
  // });
  console.log(durationInSec);
  return durationInSec;
}

exports.ascendingByDuration = function(billObject){
  var callsAsce = [];

    billObject.forEach(){}

}

// module.exports = function(list){
//
//   var myArray = [];
//   for (var key in list) {
//     if (list[key].hasOwnProperty("apples")) {
//       myArray.push({
//         shop: key,
//         price: list[key].apples
//       });
//     }
//   }
// // console.log(myArray)
//
//   var myApple = myArray.slice(0);
//      myApple.sort(function(a,b) {
//       return a.price - b.price;
//   });
//     // console.log(myApple);
//     return myApple;
// }
