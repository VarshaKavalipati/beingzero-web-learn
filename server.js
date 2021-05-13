const express = require('express');

const app = express();
app.use(express.static(__dirname + "/frontend"));
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
app.get("/todo", function(req, res) {
    res.sendFile(__dirname + "/frontend/HTML/todo.html");
})
app.post("/api/users", function(req, res) {
        var l = req.body;
        console.log(l);
        res.json({ l });
    })
    // Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})