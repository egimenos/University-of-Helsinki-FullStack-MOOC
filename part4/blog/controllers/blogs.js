const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

// blogsRouter.get("/", (request, response) => {
//   Blog.find({}).then(blogs => {
//     response.json(blogs);
//   });
// });

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs.map(blog => blog.toJSON()));
});

blogsRouter.post("/", async (request, response) => {
  if (typeof request.body.likes === 'undefined') {
    request.body.likes = 0;
  }
  const blog = new Blog(request.body);

  const result = await blog.save();
  response.status(201).json(result);
});

module.exports = blogsRouter;
