var express = required('express');
var app = express();

//hosting static files
app.use(express.static(__dirname + '/'));
console.log("static files initialized...");

//routing
app.get("/", function(req,res){
    res.send("hello world");
    
});

//launching server
app.listen(3000, function(req, res){
    console.log("opening port 3000");
    console.log('application launched at locolhost:8080');
});

