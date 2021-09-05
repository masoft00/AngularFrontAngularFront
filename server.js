const express =require("express");
const path =require("path");
const app =express();

app.use(express.static(__dirname + '/dist/XALLISSFRONTFINAL'));

app.get('/*', function(req,res){

res.sendFile(path(__dirname+'/dist/XALLISSFRONTFINAL/index.html'));

});

app.listen(process.env.PORT);