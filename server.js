var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var viewtables = [
    {
        Name: "Rachit",
        Phone_Number: "123-456-2345",
        Email: "Test@gmail.com",
        Unique_ID: "Test101"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/api/viewtable", function(req,res){
    res.sendFile(path.join(__dirname, "add.html"));
})

app.get("/api/reservation", function(req,res){
    return res.json(viewtables);
})



app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});  