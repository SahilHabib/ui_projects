//event.js
//put it in obj
    var personList=[];

$(document).ready(function() {
    var personObj1 = new Person();
    var personObj2 = new Person();
    var personObj3 = new Person();
    
   personObj1.setfirstName("hari");
    personObj1.setlastName("george");
    personObj1.setcontact("213213");
    
    personObj2.setfirstName("gen");
    personObj2.setlastName("om");
    personObj2.setcontact("21312");
    
    personObj3.setfirstName("dan");
    personObj3.setlastName("jo");
   personObj3.setcontact("12312321");
    
    personList.push(personObj1);
    personList.push(personObj2);
   personList.push(personObj3);
    
    render();
    
    //console.log(personList);
    $("#add").on("click",submit);
    
});