// const I = actor()

// in this file you can append custom step methods to 'I' object

// module.exports = function() {
//   return actor({

//     // Define custom steps here, use 'this' to access default methods of I.
//     // It is recommended to place a general 'login' function here.

//   })
//   itempfunc: () => {
//     console.log("TEMP Function called here...")
//     return
//   };
// }
const expect = require('chai').expect;

const itempfunc = function(test) {
  console.log("Temp Function called here",test);
  return;
}

const itempfunc2 = function() {
  console.log("Temp Function called here - WO Params");
  const res = await I.sendGetRequest('/products');
  expect(res.status).to.eql(200);
  console.log("Res Data Count from the function is:", res.data.length)
  return;
}

module.exports = {
  itempfunc,
  itempfunc2
}