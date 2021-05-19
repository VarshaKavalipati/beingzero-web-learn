var mongoose = require('mongoose');
var connectionString = "mongodb+srv://varsha_1996:varshacoder@cluster0.aidzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function() {
    console.log("database connected");
})