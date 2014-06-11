module.exports = function(app,express) {
	app.set('views', __dirname + '/../views');
	app.set('view engine', 'html');
// //	app.set('layout', true);
	app.engine('.html', require('jqtpl/lib/express').render);
	console.log("doing it");
}

