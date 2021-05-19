const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const courselib = require('./backend/lib/courselib');
// const dbconnect = require('./backend/db/dbconnect');

// dbconnect.connect();
const crypto = require("crypto");
var todo = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/frontend"));

app.use(express.static(path.join(__dirname, "frontend")));




var connectionString = "mongodb+srv://varsha_1996:varshacoder@cluster0.aidzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('connected', function() {
    console.log('MongoDB connected!');
});

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
});

db.on('disconnected', function() {
    console.log('MongoDB disconnected!');
});



//NEW
app.get("/", function(req, res) {
    let nam = __dirname + "/frontend/HTML/basic.html"
    res.sendFile(nam);
})

app.get("/resume", function(req, res) {
    let fnam = __dirname + "/frontend/HTML/resume.html";
    res.sendFile(fnam);
})
app.get("/google", function(req, res) {
    let gnam = __dirname + "/frontend/HTML/goog.html";
    res.sendFile(gnam);
})
app.get("/color", function(req, res) {
    let hnam = __dirname + "/frontend/HTML/color.html";
    res.sendFile(hnam);
})
app.get("/login", function(req, res) {
    let znam = __dirname + "/frontend/HTML/login.html";
    res.sendFile(znam);
})
app.get("/register", function(req, res) {
    let xnam = __dirname + "/frontend/HTML/register.html";
    res.sendFile(xnam);
})
app.get("/pie", function(req, res) {
    let ynam = __dirname + "/frontend/HTML/pie.html";
    res.sendFile(ynam);
})
app.get("/api/todo", function(req, res) {
    res.json(todo);
})


app.get("/todo", function(req, res) {
    res.sendFile(__dirname + "/frontend/HTML/todo.html");
})
app.post("/api/todo", function(req, res) {
    var newdata = req.body;
    console.log(newdata);
    todo.push(newdata);
    res.json(todo);
})

app.get("/crudop", function(req, res) {
    filePathName = __dirname + '/frontend/HTML/crud.html';
    res.sendFile(filePathName);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud", courselib.addnewone);
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})