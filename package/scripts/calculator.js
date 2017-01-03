"use strict";

/*var calculator = function() {
    
}
*/
function Calculator() {
    var x;
    var y;
    //Mutators
    this.setX=function(valx){
        x=valx;
    }
    this.setY=function(valy){
        y=valy;
    }
    //Accessors
    this.getX=function() {
        return x;
    }
    this.getY=function() {
        return y;
    }
    this.add = function() {
        return x+y;
    }
    this.subtract = function() {
        return x-y;
    }
    this.multiply = function() {
        return x*y;
    }
    this.divide = function() {
        return x/y;
    }
    this.testingOutput = function() {
        var result= this.add() + "<br>";
        result += this.subtract() + "<br>";
        result += this.multiply()+ "<br>";
        result += this.divide() + "<br>";
        console.log(this.add());
        console.log(this.subtract());
        console.log(this.multiply());
        console.log(this.divide());
        return result;
    }
}
/*
var calculatorObject = new Calculator();
function processForm(){
var result="";
calculatorObject.setX(3)+"<br>";
calculatorObject.setY(2)+"<br>";
result += "X = "+calculatorObject.getX();
result += "Y = "+calculatorObject.getY();
result += calculatorObject.testingOutput();

document.getElementById("results").innerHTML=result;

}


