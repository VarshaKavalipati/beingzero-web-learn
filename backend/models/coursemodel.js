// const mongoose = require('mongoose');
// var courseSchema = new mongoose.Schema({
//     coursename: String,
//     name: String,
//     id: Number,
//     articles: Number,
//     isDeleted: Boolean
// });

// var courseModel = mongoose.model('course', courseSchema);
// module.exports = courseModel;

const mongoose = require("mongoose");

const course = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    articles: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Negative");
        },
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const coursemodel = mongoose.model("course", course);

module.exports = coursemodel;