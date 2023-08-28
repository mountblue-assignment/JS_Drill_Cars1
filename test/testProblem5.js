const {inventory}=require('../inventory');
const countCarsBeforeYearFun=require('../problem5');

const result=countCarsBeforeYearFun(inventory,2000);

console.log("cars older than the year 2000 :",result);
console.log("Length of CountCars Data: ",result.length);