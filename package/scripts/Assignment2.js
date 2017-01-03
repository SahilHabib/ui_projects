"use strict";

function processForm() {
    event.preventDefault();
    var flag=false;
    var FirstName, LastName, Address, xresults;
    
    FirstName = document.getElementById("FN").value;
    LastName = document.getElementById("LN").value;
    Address = document.getElementById("ADD").value;
    //console.log("First Name ->"+FirstName);
    //console.log("LN"+LastName);
    //console.log("Add"+Address);
    //console.log(FirstName.length+LastName.length+Address.length);
    xresults='<br>FN -> '+ FirstName;
    xresults+='<br>LN -> '+ LastName;
    xresults+='<br>ADD -> '+ Address;
    if(FirstName.length==0) {
        flag=true;
        validation();
    }
    if(LastName.length==0) {
        flag=true;
        validation2();
    }
    if(Address.length==0) {
        flag=true;
        validation3();
    }
    if(flag) {
        alert("Error");
    }    else{
        alert("form submit");
        results(xresults);
    }
        
    }
function results(paramResults) {
    document.getElementById('results').innerHTML=paramResults;
}
function validation() {
    
    document.getElementById('errfn').innerHTML="Invalid Entry";
}
function validation2() {
    document.getElementById('last').innerHTML="Invalid Entry";
}
function validation3() {
    document.getElementById('add').innerHTML="Invalid Entry";
}