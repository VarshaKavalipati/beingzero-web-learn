const mongoose = require('mongoose');
const config = require("../config/config");

module.exports = {
    connect: function() {
        const connectionString = config.mongoConnectionString;
        //var connectionString = "mongodb+srv://varsha_1996:varshacoder@cluster0.aidzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        var db = mongoose.connection;
        db.on('connected', function() {
            console.log('MongoDB connected!');
        });
    }
}