var DB = require('./db.js').utilities;

exports.getUsers = async (req, res) => {
	console.log("GET USERS")
	let users = await DB.query(`select * from users`);
	res.json(users);
}
