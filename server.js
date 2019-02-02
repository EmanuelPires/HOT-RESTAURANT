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

    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app  



app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});  