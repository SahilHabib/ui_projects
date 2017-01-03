"use strict";

function processForm() {
    event.preventDefault();
    
    //Variable Declarations
    var result;
    var errorCount = 0;
    var firstName, lastName, address, password, gender, country;
    var cars = [];
    country = document.getElementById("country").value;
    console.log(country);
    //Grabbing values from the Form
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    address = document.getElementById("address").value;
    password = document.getElementById("password").value;
    
    //Validation for radio button
    var genderCheck = 
        document.querySelector("input[name=gender]:checked");
    if (genderCheck!=null) {
        gender = genderCheck.value;
        document.getElementById("genderErr").className = "hide";
    }
    else{
        errorCount++;
        document.getElementById("genderErr").className = "error";
    }
    var checkboxCheck = document.getElementsByName("cars[]");
    for(var i=0;i<checkboxCheck.length;i++){
        if (checkboxCheck[i].checked){
            cars.push(checkbox[i].value);
        }
    }
    
    //Validation for text boxes
    if (firstName.length==0) {
        errorCount++;
        document.getElementById("firstNameErr").className = "error";
    }
    else {
        document.getElementById("firstNameErr").className = "hide";
    }
    if (lastName.length==0) {
        errorCount++;
        document.getElementById("lastNameErr").className = "error";
    }
    else {
        document.getElementById("lastNameErr").className = "hide";
    }
    if (address.length==0) {
        errorCount++;
        document.getElementById("addressErr").className = "error";
    }
    else {
        document.getElementById("addressErr").className = "hide";
    }
    if (password.length==0) {
        errorCount++;
        document.getElementById("passwordErr").className = "error";
    }
    else {
        document.getElementById("passwordErr").className = "hide";
    }
    if (cars.length==0) {
        errorCount++;
        document.getElementById("carsErr").className = "error";
    }
    else {
        document.getElementById("carsErr").className = "hide";
    }
    if (country=="-1") {
        errorCount++;
        document.getElementById("countryErr").className = "error";
    }
    else{
        document.getElementById("countryErr").className = "hide";
    }
    
    //Generating result
    var result = "First Name -> " + firstName + "<br>";
    result += "Last Name -> " + lastName + "<br>";
    result += "Address -> " + address + "<br>";
    result += "Password -> " + password + "<br>";
    result += "Gender -> " + gender + "<br>";
    result += "Cars:<br> ";
    for (var i=0;i<cars.length;i++) {
        result += i+1+")"+cars[i]+"<br>";
    }
    result+= "<br>";
    result+= "Country -> " +country;
    
    if (errorCount==0) {
        document.getElementById("results").innerHTML = result;
        document.getElementById("results").className = "";
    }
    else {
        document.getElementById("results").innerHTML = "There are "+errorCount+" errors in the form";
        document.getElementById("results").className = "error";
    }
}