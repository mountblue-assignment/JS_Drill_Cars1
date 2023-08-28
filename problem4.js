// ==== Problem #4 ====
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.


  function showAllCarYears(inventory){
     
     let carYearsData=[];

     for(let i=0;i<inventory.length;i++){
        carYearsData.push(inventory[i].car_year);
     }
     return carYearsData;
  }

 module.exports=showAllCarYears;

