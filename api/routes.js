const express = require('express');
const smarts = require('./smarts.js');

let apiRoutes = express.Router();

apiRoutes.get('/posts', smarts.getPosts);
apiRoutes.get('/posts/generateSampleData', smarts.generateData);
apiRoutes.get('/posts/:id', smarts.getPost);
apiRoutes.get('/categories', smarts.getCategories);
apiRoutes.post('/posts', smarts.createPost);
apiRoutes.put('/posts/:id', smarts.updatePost);
apiRoutes.delete('/posts', smarts.deleteAllPosts);
apiRoutes.delete('/posts/:id', smarts.deletePost);

exports.router = apiRoutes;
