const {inventory}=require('../inventory');
const findLastCarFun=require('../problem2');

const result=findLastCarFun(inventory);


console.log(`"Last car is a ${result.car_make} ${result.car_model}`);
