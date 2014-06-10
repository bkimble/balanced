var jqtpl = require('jqtpl'),
express = require('express'),
config = require('konfig')(),
app = express();

var routes = require('./routes');

app.listen(8000);
console.log("Server running on port 8000");

// Make App requirable for unit testing
module.exports = app;
