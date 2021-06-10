//get the reference of first div using DOM methods
var x = document.querySelectorAll(".div-class")[0]; 
console.log(x);

//Change attribute class of this div to ‘changed-class’
var y = x.className = "changed-class";
console.log(y);

//change the style attribute of that div to give red color to the text 
x.style.color = "red";

//give solid blue border to it.
x.style.border = " 2px solid blue";