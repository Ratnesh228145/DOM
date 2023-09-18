let number=5;
 number==0
    ? console.log("given number is zero")
    : number>0
    ? console.log("given number is greater than zero")
    : console.log("numver is less than zer0");


    //-----------------------------------------largest number--------------------------------------------------------------
    let num1=45;
    let num2=43;

    num1==num2
       ? console.log("given two number is equl")
       :num1>num2
       ?console.log("num1 is greater than num2")
       : console.log("num1 is less than num2");
 
       
   //----------------------------------------loops-----------------------------------------------------------------------------
   //-----------------------------------generate the nultiplication table------------------------------------------------------
   
   let numb=5
   for(let i=1;i<=10;i++){
      console.log('${numb}  * ${i} = ${numb * i}');
   }

   //------------------------------------------positive even number-------------------------------------------------------------
   let lastnumber=17;
   for(let i=1;i<=lastnumber;i++){
      if(i%2==0){
         console.log(i);
      }
   }