var DB = require('./db.js').utilities;

exports.getPost = async (req, res) => {
	console.log("Get single post")
	let post = await DB.query(`select * from posts where id = ${req.params.id}`);
	res.json(post && post.length > 0 ? post[0] : []);
}

exports.getPosts = async (req, res) => {
	console.log("Get posts")
	let posts = await DB.query(`select * from posts order by timeStamp desc`);
	res.json(posts);
}

exports.createPost = async (req, res) => {
	console.log("Create post")
	let postContents = req.body.text ? req.body.text : req.body.contents;
	let query = `insert into posts (title, contents, categoryId, timeStamp) values ('${DB.clean(req.body.title)}', '${DB.clean(postContents)}', '${req.body.categoryId}', now())`;
	let newPost = await DB.query(query);
	let post = await DB.query(`select * from posts where id = ${newPost.insertId}`);
	res.json(post && post.length > 0 ? post[0] : []);
}

exports.deletePost = async (req, res) => {
	console.log("Delete post")
	let posts = await DB.query(`delete from posts where id = ${req.params.id}`);
	res.json({success: true});
}

exports.deleteAllPosts = async (req, res) => {
	console.log("Delete all posts")
	await DB.query(`truncate table posts`);
	res.json({success: true});
}

exports.updatePost = async (req, res) => {
	console.log("Update post")
	let postContents = req.body.text ? req.body.text : req.body.contents;
	await DB.query(`update posts set title = '${DB.clean(req.body.title)}', contents = '${DB.clean(postContents)}', categoryId = ${req.body.categoryId} where id = ${req.params.id}`);
	let post = await DB.query(`select * from posts where id = ${req.params.id}`);
	res.json(post && post.length > 0 ? post[0] : []);
}

exports.getCategories = async (req, res) => {
	console.log("Get categories")
	let categories = await DB.query(`select * from categories`);
	res.json(categories);
}

exports.generateData = async (req, res) => {
	let posts = await DB.query(`select count(*) as count from posts`);
	if (posts && posts.length > 0 && posts[0].count == 0) {
		console.log("Generating sample data...");
		let categories = ["General", "Technology", "Randon"];
		for (let category of categories) {
			let query = `insert into categories (name) values ('${category}')`
			DB.query(query);
		}
		let posts = [{
			title: "Blog Post Title 1",
			contents: "<p>This is a blog post</p>",
			categoryId: 2
		}, {
			title: "Blog Post 2 Title",
			contents: "<p>This is another blog post</p>",
			categoryId: 1
		}];
		for (let post of posts) {
			let query = `insert into posts (title, contents, categoryId, timeStamp) values ('${DB.clean(post.title)}', '${DB.clean(post.contents)}', ${post.categoryId}, now())`
			DB.query(query);
		}
	}
	res.json({success: true});
}
