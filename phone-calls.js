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

exports.durationInSeconds = function(billObject){
  var durationList = [];

  billObject.forEach(function(calls){
    var duration = calls.duration.split('-');
    var durationInSec = Number(duration[0]*3600) + Number(duration[1]*60) + Number(duration[2]);
      console.log(durationInSec);

      durationList.push(durationInSec);
  });
  console.log(durationList);
  return durationList;
}
