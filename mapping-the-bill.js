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

            // console.log(newBillArray);

            var billMap = {};

            newBillArray.forEach(function(billList){
              var provider = billList.provider;
              var cell = billList.cellNum;
              var duration = billList.duration;

                // if(billMap[cell] === undefined){
                //   billMap[cell] = 0;
                // }
                //
                // billMap[cell] += provider;
            });

            console.log(billMap);
            return billMap;

};

// var productMap = {};
//
// dataToArray.forEach(function(list) {
//     var item = list.products;
//     var qty = list.sold;
//
//     if (productMap[item] === undefined) {
//       productMap[item] = 0;
//       }
//
//     productMap[item] += qty;
//   });
//
//   // console.log(productMap);
//   return productMap;
// };

// // creating an array.
// exports.mappedWeeks = function(filepath) {
//
//   var list = fs.readFileSync(filepath, "utf8");
//
//   var newList = list
//     .split('\n')
//     .splice(1)
//     .filter(Boolean);
//
//     // console.log(newList);
//
//
//   var dataToArray = [];
//
//   for (var i = 0; i < newList.length; i++) {
//     newList[i] = newList[i]
//       .split(',')
//       .splice(1);
//
//
//     dataToArray.push({
//
//       date: newList[i][0] + '-2016',
//       products: newList[i][1],
//       sold: Number(newList[i][2]),
//       price: Number(newList[i][3].replace(/R/, ''))
//
//     })
// }
//   // console.log(dataToArray);
//
//
//
