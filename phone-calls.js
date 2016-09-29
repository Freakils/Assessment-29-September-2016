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

  
