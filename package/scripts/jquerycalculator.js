"use strict"

alert(",jhkjgj");

$(document).ready(function(){ alert('HelloWorld');
 function submit() {  
 event.preventDefault();                            
var x,y;
                            
x = $("#num1").val();  
y = $("#num2").val();  

console.log(x);
console.log(y);
                             

        }

$("#submit").on("click", submit);


});