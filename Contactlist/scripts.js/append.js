function append() {
    event.preventDefault();
    
    //alert("testing append");
    
    var personObj = new Person();
    personObj.setfirstName($("#firstName").val());
    personObj.setlastName($("#lastName").val());
    personObj.setcontact($("#contact").val());
    personObj.setemail($("#email").val());
    return personObj;
    
 //   console.log("test for object");
//    var result=personObj.getFirstName()+"<br>";
 //   result+=personObj.getLastName()+"<br>";
 //   result+=personObj.getContact()+"<br>";
 //   result+=personObj.getEmail()+"<br>";
 //   console.log(result);
}
function submit() {
  var tempObj = append();
  personList.push(tempObj)
    
    render();
    return false;
   
}
//render html contents
function render() {
    var results = "";
   // var tempArray = ["apple,ban,car,oni"];
    
    
    personList.forEach(function(personObj) {
        results+="<tr>";
        results+="<td>"+personObj.getfirstName()+"</td>";
        results+="<td>"+personObj.getlastName()+"</td>";
        results+="<td>"+personObj.getcontact()+"</td>";
        results+="<td>"+personObj.getemail()+"</td>";
        results+="</tr>";
        
            personObj.testFunc();
        });
    $("#resultTbl tbody").html(results);
}