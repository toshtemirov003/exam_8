import { fetch, fetchOne } from "../../utils/pg.js";

let getPost = "select * from posts order by id asc";
let getPostLimit = "select * from posts order by id asc offset $1 limit $2";
let getById = "select * from posts where id=$1";
let postPost = "insert into posts(post_title, post_name, post_status)values($1,$2,$3) returning *";
let updatePost = "update posts set post_title=$1, post_name=$2, post_status=$3 where id=$4 returning *";
let deletePost = "delete from posts where id=$1 returning *";
let statusPost = "update posts set status=$1 where id=$2 returning *";
let filterDataPost = "select * from posts where posts.created_at = $1 returning *";

let find = () => fetch(getPost);
let getLimit = (offset, limit) => fetch(getPostLimit, offset, limit);
let get_by_id = (id) => fetchOne(getById, id);
let create = (title, name, status) => fetchOne(postPost, title, name, status);
let update = (title, name, status, id) => fetchOne(updatePost, title, name, status, id);
let deleteP = (id) => fetchOne(deletePost, id);
let status = (id) => fetchOne(statusPost, id);
let filterData = (date) => fetch(filterDataPost, date);

export default {
  find,
  get_by_id,
  getLimit,
  create,
  update,
  deleteP,
  status,
  filterData,
};
