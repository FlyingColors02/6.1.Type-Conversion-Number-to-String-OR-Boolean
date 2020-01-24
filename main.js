//convert Number Data Type to String OR Boolean

let intValue=10;
console.log(intValue);//10
console.log(typeof(intValue));//number

///////////////////////////////////////////////////////////

//convert number to string
let strValue=String(intValue);
console.log(strValue);//10
console.log(typeof(strValue));//string

///////////////////////////////////////////////////////////

//convert number to boolean
let boolValue=Boolean(intValue);
console.log(boolValue);//true
console.log(typeof(boolValue));//boolean
//boolean values are 0=false 1=true...
//here as number value is 10 and not 0 we get true

intValue=-1;
boolValue=Boolean(intValue);
console.log(boolValue);//true
console.log(typeof(boolValue));//boolean
//even though number value is negative it is not '0' so it is true.