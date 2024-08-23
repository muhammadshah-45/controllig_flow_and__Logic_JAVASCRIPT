console.log("running");
// var dayOfWeek =prompt("Enter a day of week")
// if(dayOfWeek === "Sat" || dayOfWeek === "Sunday") {
//     alert(
//         "Aaj hamara class hai"
//     )
// }else if(dayOfWeek === "Fri"){
//     alert("Aaj hamara class nhi hai")
// }
// else{
//     alert("bhai koye day name daal dein")
// }

// switch (dayOfWeek) {
//     case "Sat":
//     case "Sun":
//         alert("Aaj hamara class hai");
//         break;
//     case "Fri":
//         alert("Aaj hamara class nhi hai");
//         break;
//     default:
//         alert("Bhai koye day name daal dein");
// }

// create an object

let obj = {
    name :"Muhammad",
    sayHello : function(){
        console.log(this.name);
    }
}
console.log(obj.sayHello());