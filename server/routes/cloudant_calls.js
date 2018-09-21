var Promise = require('bluebird');
var express = require('express');
var router = express.Router();
var config = require('../config').config();

var Cloudant = require('cloudant');
var username = config.username;
var password = config.password;
var cloudant = Cloudant({ account: username, password: password, plugins: 'promises' });


function getAllData(db, record) {
	return new Promise(function (resolve, reject) {
		db.list({ include_docs: true }, function (err, data) {
			if (!err) {
				resolve(data);
			}
			else {
				resolve(err);
			}
		});
	});
}

router.get('/api/v1/getBlogData', function (req, res) {
    var blog=cloudant.db.use('blog');
    dbquerries =[getAllData(blog)];
    Promise.all(dbquerries).then(function (data) {
        var response=[];
        for(var i=0;i<data[0].rows.length;i++){
            response.push(data[0].rows[i].doc);
        }
        res.send(response);
    }, function (err) {
		console.log(err);

	});
});

function saveData(db, record) {
	return new Promise(function (resolve, reject) {
		db.insert(record, function (err, data) {
			if (!err) {
				resolve(data);
			}
			else {
				resolve(err);
			}
		});
	});
}


router.post('/api/v1/addBlogData', function (req, res) {
    var record = req.body;
    console.log(record);
    var blog=cloudant.db.use('blog');
    saveData(blog,record).then(function (myData) {
		res.json(myData);
	});

});



module.exports = router;