//Now get the reference of first div using DOM methods
let element = document.querySelectorAll(".div-class")[0];
console.log(element);

//Print the color and border of the div
console.log(element.style.color);
console.log(element.style.border);

//change text color
let x=element.style.color ="red";
console.log(x)