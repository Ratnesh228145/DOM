const day="tuesday";
let daysuntilweakend;

switch(day){
    case "monday":
        console.log("There are 5days(s) until the weekend.");
        break;
    case "tuesday":
        console.log("There are 4days(s) until the weekend.");
        break; 
    case "wednesday":
        console.log("There are 3days(s) until the weekend.");
        break;
    case "thursday":
        console.log("There are 2days(s) until the weekend.");
        break; 
    case "friday":
        console.log("There are 1days(s) until the weekend.");
        break;  
    case "saturday":
    case "sunday":  
    console.log("There are 0days(s) until the weekend.");
    break; 
    default :
    daysuntilweakend="invalidday";
    break;             
}