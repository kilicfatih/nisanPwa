var express = require("express");
var bodyParser = require("body-parser");
var cors= require("cors");
var mongoose= require("mongoose");
const env= require("./environments/environment")

var app = express();

mongoose.connect(this.env, err=>{
    if(!err){
        console.log("database baglandi...")
    }
})
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static("/public"))