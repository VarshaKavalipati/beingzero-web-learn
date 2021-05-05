const express = require('express');

const app = express();
app.use(express.static(__dirname + "/frontend"));
//NEW
app.get("/", function(req, res) {
    res.send("Welcome to Varsha's Basic Site");
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

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})