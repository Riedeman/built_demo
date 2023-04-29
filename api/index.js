const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require("./routes");

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json()); // Send JSON responses

app.use(cors());
app.options('*', cors()); // include before other routes for preflight checks

// Add headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use((req, res, next) => {
	const allowedOrigins = ['http://localhost:5000', 'http://localhost:8080'];
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	next();
});

app.use((req, res, next) => {
	console.log('Route Called:', req.url);
	if (JSON.stringify(req.body).length > 2) {
		console.log('Body:', req.body);
	}
	next();
});

app.use("/", apiRoutes.router);

app.get("*", async (req, res) => {
	res.status(404).send("No soup for you!!!");
});

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port ' + port);
