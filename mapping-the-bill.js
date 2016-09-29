var fs = require("fs");

// creatin the array.
exports.mappingTheBill = function(filepath){

  var billcsv = fs.readFileSync(filepath, 'utf8');
    // console.log(billcsv);

      var newBill = billcsv
          .split('\r')
          .splice(1)
          .filter(Boolean);

            // console.log(newBill);

          var newBillArray = [];

            for(var i = 0; i < newBill.length; i++){
              newBill[i] = newBill[i]
                .split(',')
                // .splice(1)

                newBillArray.push({
                  date: newBill[i][0],
                  provider: newBill[i][1],
                  cellNum: (newBill[i][2]),
                  duration: (newBill[i][3].replace(/h/, '-').replace(/m/, '-').replace(/s/, ''))
                })
            }

            console.log(newBillArray);
            return newBillArray;

            // var billMap = {};
            //
            // newBillArray.forEach(function(billList){
            //   var provider = billList.provider;
            //   var cell = billList.cellNum;
            //
            //   billMap[cell] = provider;
            //
            // // console.log(cell);
            // });
            //
            // // console.log(billMap);
            // return billMap;

};
