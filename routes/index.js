var balpay = require('balpay');

module.exports = function(app) {
	app.get('/', function(req, res){		
		res.render("index");
	});

	app.get('/index', function(req, res){		
		res.render("index");
	});

	app.post('/cc', function(req, res){
		balpay.charge();
		res.render("index");
	});

};