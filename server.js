//require('dotenv').config()
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const courselib = require('./backend/lib/courselib');
const config = require('./backend/config/config');
const dbconnect = require('./backend/lib/dbConnectLib');
const users = require('./backend/models/usermodel');
// const dbconnect = require('./backend/db/dbconnect');

// dbconnect.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/frontend"));

app.use(express.static(path.join(__dirname, "frontend")));


const { request } = require('express');
var cookieParser = require("cookie-parser")
var session = require("express-session");
const MongoStore = require('connect-mongo');
dbconnect.connect();
//dbConnectLib.connect();
const crypto = require("crypto");
var todo = [];
app.use(cookieParser());
app.use(session({
    secret: "thi is secret!!!!",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000
    },
    store: MongoStore.create({ mongoUrl: process.env.MONGO_CONNECTION_STRING })

}))


app.post('/api/login', function(req, res) {
    users.find(req.body, function(err, data) {
        if (err) { res.status(400).json({ msg: "Failed" }); } else if (data.length == 1) {
            req.session.userid = data[0]._id
            req.session.username = data[0].username
            console.log(req.session)
            res.redirect("/indexpage");

        } else {

            res.redirect("/login");

        }
    });
})
var isAuthenticated = (req, res, next) => {
    if (req.session && req.session.userid)
        next();
    else
        return res.redirect("/login");
}
var isNotAuthenticated = (req, res, next) => {
    if (!req.session || !req.session.userid)
        next();
    else
        return res.redirect("/");
}

app.get("/indexpage", isAuthenticated, (req, res) => {
    res.sendFile(__dirname + "/frontend/HTML/home.html");
})

app.get("/getdetails", isAuthenticated, (req, res) => {
    res.json({
        username: req.session.username
    });
})

app.get("/api/logout", isAuthenticated, (req, res) => {
    req.session.destroy(err => {
        if (err)
            return res.status(404).json({
                err: "error"
            })
    })

    return res.status(200).json({
        message: "succcessfully signout"
    })

})
app.post('/api/register', function(req, res) {
    users.find({ email: req.body.email }, function(err, data) {
        if (err) { res.status(400).json({ msg: "Failed" }); } else { //console.log(data);
            if (data.length > 0)
                res.status(200).json({ msg: "Saved Successful", result: data });
            else {

                var add = new users(req.body);
                add.save(function(err, record) {
                    if (err) {
                        res.redirect("/register");
                    } else {
                        res.redirect("/login");
                    }
                });
            }
        }
    });
})



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
app.get("/tambola", function(req, res) {
    res.sendFile(__dirname + "/frontend/HTML/tambola.html");
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
//const PORT = process.env.PORT || 3000;

// Start the server

app.listen(config.webPort, function() {
    console.log("Server Starting running on http://localhost:" + config.webPort);
})