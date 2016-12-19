"use strict";

function processForm() {
    event.preventDefault();
    var flag=false;
    var FirstName, LastName, Address, xresults;
    var ;
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
        alert("eggggggggr")
    }
    if(LastName.length==0) {
        flag=true;
    }
    if(Address.length==0) {
        flag=true;
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