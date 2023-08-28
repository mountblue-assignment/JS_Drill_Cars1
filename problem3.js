// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.



function sortByCarModel(inventory){
         
    let carModels=[];

    for(let i=0;i<inventory.length;i++){
        carModels.push(inventory[i].car_model);
    }

    /*we will use sort function and will modify to our needs bcz sometime sort function doesnt work 
        so we will use if elseif and will compare modelA modelB (lowercase)
    */

   carModels.sort(function (a,b){
           let modelA=a.toLowerCase();
           let modelB=b.toLowerCase();
           
     //if we return 1 so it will put modelA after modelB 
     if(modelA>modelB){ 
         return 1;
        }
        
  //if we return -1 so it will put modelA before modelB 
            else if(modelA<modelB){
                return -1;
            }
  //if we return 0 so there will be no change in order,it will put modelA and modelB as it is     
            else if(modelA=== modelB){
                return 0;
            }        
    })

    return carModels;
}


module.exports=sortByCarModel;