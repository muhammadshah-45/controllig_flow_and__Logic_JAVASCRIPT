// var merchTotal = +prompt("Enter your order total number");

// if(merchTotal >= 51 && merchTotal <= 100){
//     orderTotal = merchTotal;
//     console.log("first Condition",orderTotal);
// }else if(merchTotal >= 21  && merchTotal <=50 ){
//     orderTotal = merchTotal + 5;
//     console.log("second Condition",orderTotal);
// }else if(merchTotal <= 20){
//     orderTotal = merchTotal + 5 + (.03 * (merchTotal - 50));
//     console.log("last Condition",orderTotal);
// }
// else{
//     console.log(merchTotal);
// }


function calcTot(merchTot) {
     var orderTot;
     if (merchTot >= 100) {
     orderTot = merchTot;
     }
     else if (merchTot < 50.01) {
     orderTot = merchTot + 5;
     }
     else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
     }
     return orderTot;
     }
    
     console.log(calcTot(234));
     console.log(calcTot(75));
    let name = "Muhammad";
     function student(){
        console.log(name);
     }
     student()