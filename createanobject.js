//---------------------------creat an array----------------------------
const recentlyviewedproducts=[
    {
        name:"tablet",
       
    },
     {
        name:"laptop",
    },
    {name:"book",},
    {name:"pen",},
       {name:"watch",},
        {name:"shirt",},
            {name:"looser",},
                {name:"shoos",},
                    {name:"belt",},
       
    ];
    
console.log(recentlyviewedproducts);


//-----------crate an object-----------------------
const student={
    1:"Mithun",
    2:"alka",
    3:"Anurag",
    4:"Prabir",
    5:"shivam",
};
console.log(student);

//--------------variables and typrof--------------------
// 1. string
let value1="i am happy";
console.log (typeof value1);
// 2.number
// i) integer
let value2=4;
console.log(typeof value2);
// ii) floating value
let value3=15.6;
console.log(typeof value3);
// iii) infinity
let value4=Number.POSITIVE_INFINITY;
console.log(typeof value4);
// iv) not a number
let value5= NaN;
console.log(typeof value5);
// 3. Bigint
let var6=1024n;
console.log(typeof var6);
// 4. Boolean
let var7=true;
console.log(typeof var7);
// 5. Undefined
let var8=undefined;
console.log(typeof var8);
// 6.null
let var9= null;
console.log( var9);
// 7. Symbol
let var10=Symbol("pw skills");
console.log(typeof var10);
// 8. objects
// a) array
let var11=[1, 2, "pw"];
console.log(typeof var11);
// b). object
let var12={name:"pw skills", course:"full stack web development",};
console.log(typeof var12);

//-------------------------------------- 2 valid variables and 2 invalid variables------------------------------------------------
// valid variable
let var1="pw skills";
console.log(var1); // output : pw skiils
let Isram=true;
console.log(Isram); //output : true
// invalid variable
let 1mango="yellow";
console.log(1mango); //output= SyntaxError: Invalid or unexpected token
let var=13
console.log(var); //output= SyntaxError: Unexpected token 'var'