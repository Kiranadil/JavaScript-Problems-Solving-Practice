/*Declare a variable using let inside a function.Add that 
same variable in another function and see what happens.*/

function variableName1(){
    let a = 5 ;
    console.log(a);
}

function variableName2(){
    console.log(a);
}

//It is showing "can't find the variable".
//This is because "let" scopes the variable to the local only in which it is declared.

/*Now declare a variable using var in a block and try reassigning the value to that
 variable in another block and see if it throws an error or not.*/
 function firstFunction(){
     var b = 9;
 }
 console.log(b);

 //Yes it is throwing an error--->because it isn't declared as global

 //Create a global variable 
 var x = 10;
// Here x is 10
 function functionOne() {
  let x = 2;
  // Here x is 2
}
function functionTwo(){
    let y =x+2;
    console.log(y);
}
  console.log(x);