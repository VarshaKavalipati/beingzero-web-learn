const express = require('express');

const app = express();
app.use(express.static(__dirname + "/frontend"));
//NEW
app.get("/", function(req, res) {
    res.send("Welcome to Varsha's Basic Site");
})

app.get("/resume", function(req, res) {
    let fnam = __dirname + "/frontend/HTML/resum.html";
    res.sendFile(fnam);
})


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})