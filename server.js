var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 8000;

mongoose.connect('mongodb://localhost/pet_db');

app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json())
require('./server/config/routes.js')(app);

app.all("*", (req, res, next) => {
	res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(port, function () {
	console.log(`listening on port ${port}`);
})