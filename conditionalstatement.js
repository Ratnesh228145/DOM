let trafficlight="orange";
if(trafficlight=="red"){
    console.log("vehicals must stop");
}else if(trafficlight=="orange"){
    console.log("vehicle must wait. the signal is change green or red");
}else if(trafficlight=="green"){
    console.log("vehicle may proceed with caution.");
} else {
    console.log("invalid traffic light");
}

//--------------------------------------- largest of 2 numbers.--------------------------------------------------
let num1=69;
let num2=79;
if(num1>num2){
    console.log(num1+" is the greatest number");
}else{
    console.log(num2+" is a greatest number");
}

//-------------------------------------divisible ---------------------------------------------------------------
let num=5;
if(num%3==0 && num%5==0){
    console.log("FizzBuzz");
}else if(num%3==0){
    console.log("Fizz");
}else if(num%5==0){
    console.log("Buzz");
}else{
    console.log("invalid input");
}

