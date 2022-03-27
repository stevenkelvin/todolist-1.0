const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let lists = ["Buy Food", "Cook Food", "Eat Food"];
let workLists = [];

app.get("/", function (req, res) {

    let day = date();

    res.render("list", {listTitle: day, newLists: lists});
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if(req.body.button === "Work"){
        workLists.push(item);
        res.redirect("/work");
    } else {
       lists.push(item);
        res.redirect("/");
    }

        
});

app.get("/work", function (req, res){
    res.render("list", {listTitle: "Work List", newLists: workLists});
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;

    workLists.push(item);
    res.redirect("/work");
});

app.get("/about", function (req,res) {
    res.render("about", {listTitle: "About Me"});
});

app.listen(3000,function (req, res) {
    console.log("Server connected on port 3000...");
});

