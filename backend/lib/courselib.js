// const coursemodel = require('../models/coursemodel');

// module.exports.createcourse = function(req, res) {
//     var course = new coursemodel(req.body);
//     course.save(function(err, courseobj) {
//         if (err) {
//             console.log("err" + err);
//         } else {
//             callback(err, courseobj);
//         }
//     })
// }

// module.exports.getallcourses = function(req, res) {
//     var query = {}
//     coursemodel.find(query, function(err, courseobjarr) {
//         if (err) {
//             res.json({ error: err });
//         } else {
//             res.json(courseobjarr);
//         }
//     })
// }

var coursemodel = require('../models/coursemodel');

module.exports.getall = function(req, res) {
    var query = {};
    coursemodel.find(query, function(err, obj) {
        if (err)
            console.log("ERROR: " + err);
        res.send(obj);
    });
}

module.exports.addnewone = function(req, res) {
    var obj = new coursemodel(req.body);
    console.log(obj);
    obj.save(function(err) {
        if (err)
            console.log("ERROR: " + err);
        else
            console.log("SAV SUCCESS " + JSON.stringify(obj));
    })
}
module.exports.deleteone = function(req, res) {
    // console.log(req);
    var id = req.params.idd;
    var idd;
    var obj = coursemodel.find({ id: id }, function(err, obj) {

        coursemodel.findByIdAndRemove(obj[0]._id, function(err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Removed User : ", docs);
            }
        });
    });

}


module.exports.update = function(req, res) {
    // console.log(req);
    var id = req.params.idd;
    var idd;
    var obj = coursemodel.find({ id: id }, function(err, obj) {

        coursemodel.findByIdAndUpdate(obj[0]._id, { articles: req.body.articles },
            function(err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Updated User : ", docs);
                }
            });
    })
}