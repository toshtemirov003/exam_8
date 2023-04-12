import Joi from "joi";
import Posts from "./model.js";

const getPost = async (req, res) => {
  let posts = await Posts.find();
  if (posts) {
    res.status(200).json({ message: "Posts", data: posts });
  }
};

const getById = async (req, res) => {
  let { id } = req.params;

  let post = await Posts.get_by_id(id);
  if (post) {
    res.status(200).json({ message: "Post", data: post });
  }
};

const getLimit = async (req, res) => {
  let { offset } = req.params;
  let { limit } = req.params;

  let postLimit = await Posts.getLimit(offset, limit);

  if (postLimit) {
    res.status(200).json({ message: "Post in Limit", data: postLimit });
  }
};

const postPost = async (req, res) => {
  try {
    let { title, name, status } = req.body;

    let schema = Joi.object({
      title: Joi.string().min(3).max(64).required(),
      name: Joi.string().min(3).max(64).required(),
      status: Joi.string().required(),
    });

    let { error } = schema.validate({ title, name, status });
    if (error) return res.status(400).json({ message: error.message });

    let newPost = await Posts.create(title, name, status);
    if (newPost) {
      res.status(201).json({ message: "Post created", data: newPost });
    }
  } catch (error) {
    res.status.json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  let { id } = req.params;
  let { title, name, status } = req.body;

  let uPost = await Posts.update(title, name, status, id);
  if (uPost) {
    res.status(200).json({ message: "Post updated", data: uPost });
  }
};

const deletePost = async (req, res) => {
  let { id } = req.params;

  let delPost = await Posts.deleteP(id);
  if (delPost) {
    res.status(200).json({ message: "Post deleted", data: delPost });
  }
};

const updateStatus = async (req, res) => {
  let { statusId } = req.params;
  let { status } = req.body;

  let uPost = await Posts.status(status, statusId);
  if (uPost) {
    res.status(200).json({ message: "Post status updated", data: uPost });
  }
};

const filterDateP = async (req, res) => {
  let { date } = req.params;

  let postCreated_at = await Posts.filterData(date);
  if (postCreated_at) {
    res.status.json({ message: "Filter Post Data", data: postCreated_at });
  }
};

export {
  getPost,
  getById,
  getLimit,
  postPost,
  updatePost,
  deletePost,
  updateStatus,
  filterDateP,
};
