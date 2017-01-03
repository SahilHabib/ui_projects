"use strict";

function Person () {
    var firstName, lastName, contact, email;
    this.setfirstName=function(fname) {
        firstName=fname;
    }
    this.setlastName=function(lname) {
        lastName=lname;
    }
    this.setcontact=function(con) {
        contact=con;
    }
    this.setemail=function(em) {
        email=em;
    }
    this.getfirstName=function() {
        return firstName; 
    }
    this.getlastName=function() {
        return lastName;
    }
    this.getcontact=function() {
        return contact;
    }
    this.getemail=function() {
        return email;
    }
    this.testFunc=function() {
        console.log("rendering object");
        console.log(this.getfirstName);
        console.log(this.getlastName);
    }
}

//testing object
/*
var obj = new Person();
obj.setFirstName("hello");
obj.setLastName("world");
obj.setContact("123213");
obj.setEmail("asdas@hjsfs");

console.log(obj.getFirstName());
console.log(obj.getLastName());
console.log(obj.getContact());
console.log(obj.getEmail());
*/

