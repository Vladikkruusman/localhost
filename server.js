const express = require("express");
const app = express();

app.get("/", function(request, respons){
    //console.log(request);
    respons.send("<h1>Hellow world!</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>Im not perfect progammer</h1>")
});

app.get("/contact", function(req, res){
    res.send("<h1>Vladimir.Putin@gmail.com</h1>")
});

app.listen(5000, function(){
    console.log("Server is running on Port 5000.");
})
