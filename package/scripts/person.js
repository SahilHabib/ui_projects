"use strict";

function Person () {
    var firstname, lastname, contact, email;
    this.setFirstname=function(fname) {
        firstname=fName;
    }
    this.setLastname=function(lName) {
        lastname=lName;
    }
    this.setContact=function(con) {
        contact=con;
    }
    this.setEmail=function(em) {
        email=em;
    }
    this.getFirstName=function() {
        return firstName; 
    }
    this.getLastName=function() {
        return lastName;
    }
    this.getContact=function() {
        return contact;
    }
    this.getEmail=function() {
        return email;
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


