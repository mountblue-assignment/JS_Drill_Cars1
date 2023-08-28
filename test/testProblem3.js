const {inventory}=require('../inventory');
const sortByCarModelFun=require('../problem3');

const result=sortByCarModelFun(inventory);

console.log("Car Models are :"+result);