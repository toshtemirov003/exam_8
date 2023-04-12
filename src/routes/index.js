import { Router } from "express";
import {
  deletePost,
  filterDateP,
  getById,
  getLimit,
  getPost,
  postPost,
  updatePost,
  updateStatus,
} from "../controllers/post/post.controller.js";

let router = Router();

router.get("/posts", getPost);
router.get("/posts/:id", getById);
router.get("/posts/:offset/:limit", getLimit);
router.post("/posts", postPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.put("/posts/:statusId", updateStatus);
router.get("/posts/:date", filterDateP);

export default router;
