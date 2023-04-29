const env = "development";
const mysql = require('mysql2');
const config = require('./config.json')[env];

let connection = mysql.createConnection({
	host: config.host,
	user: config.username,
	database: config.database,
	password: config.password
});

async function findByPK(type, key) {
	// console.log("------------------find by PK", type, key);
	let query = `select * from ${type} WHERE id = ${key}`;
	return new Promise((resolve, reject) => {
		connection.query(query, (err, rows) => {
			if (err) reject(err);
			if (rows && rows.length > 0) {
				resolve(rows[0]);
			} else {
				resolve([]);
			}
		});
	});
}

async function findOne(q) {
	// console.log("------------------Find One query", q);
	return new Promise((resolve, reject) => {
		connection.query(q, (err, rows) => {
			if (err) reject(err);
			if (rows) {
				resolve(rows[0]);
			} else {
				resolve(null)
			}
		});
	});
}

async function query(q) {
	// console.log("------------------query", q);
	return new Promise((resolve, reject) => {
		connection.query(q, (err, rows) => {
			if (err) reject(err);
			resolve(rows);
		});
	});
}

const utilities = {
	findByPK: findByPK,
	findOne: findOne,
	query: query,
	clean: clean
}
exports.utilities = utilities;

async function runTest(req, res) {
	try {
		let query = `select count(*) from posts;`
		connection.query(query, (err, result) => {
			if (err) {
				console.log("UH OH", err);
			}
			if (result && result.length > 0) {
				console.log('MySQL Connection has been established successfully!');
			}
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
runTest();

function clean(t) {
	return t ? t.replaceAll("'", "''").trim() : null;
}
