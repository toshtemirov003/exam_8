create database exam;
\c exam;

drop table if exists posts;
create table posts
(
  id serial not null primary key,
  post_title varchar(64) not null,
  post_name varchar(64) not null,
  post_status varchar(32) not null,
  created_at timestamptz default current_timestamp
);



insert into posts
  (post_title, post_name, post_status)
values
  ('Phone bozor', 'Iphone', true),
  ('New Cars', 'Cars', true),
  ('NewPost', 'new', false);



-- {
--             "id": 2,
--             "post_title": "Photo",
--             "post_name": "new Photo",
--             "post_status": true,
--             "create_at": "2023-04-12T11:09:01.592Z"
--         },
--         {
--             "id": 3,
--             "post_title": "football",
--             "post_name": "uefa",
--             "post_status": true,
--             "create_at": "2023-04-12T11:09:21.549Z"
--         },
--         {
--             "id": 4,
--             "post_title": "Begzod aka",
--             "post_name": "mowinaga qaren",
--             "post_status": true,
--             "create_at": "2023-04-12T11:09:37.836Z"
--         },
--         {
--             "id": 5,
--             "post_title": "Manergaca kee",
--             "post_name": "Fayzulla",
--             "post_status": true,
--             "create_at": "2023-04-12T11:10:05.723Z"
--         },
--         {
--             "id": 6,
--             "post_title": "Suv obi hayot",
--             "post_name": "Suv",
--             "post_status": true,
--             "create_at": "2023-04-12T11:10:24.301Z"
--         },
--         {
--             "id": 7,
--             "post_title": "Telefonlar",
--             "post_name": "phone",
--             "post_status": true,
--             "create_at": "2023-04-12T12:04:20.490Z"
--         },
--         {
--             "id": 8,
--             "post_title": "Phone bozor",
--             "post_name": "Iphone",
--             "post_status": true,
--             "create_at": "2023-04-12T12:09:18.719Z"
--         },
--         {
--             "id": 9,
--             "post_title": "New Cars",
--             "post_name": "Cars",
--             "post_status": true,
--             "create_at": "2023-04-12T12:09:18.719Z"
--         },
--         {
--             "id": 10,
--             "post_title": "NewPost",
--             "post_name": "new",
--             "post_status": false,
--             "create_at": "2023-04-12T12:09:18.719Z"
--         }



-- TodoApp

-- qilinadigan amallar. Todo qo'shish, o'chirish, o'zgartira olish. Bajarildi yoki bajarilmadiga o'tkazish. 

-- Todolarni ko'rishda uning pagination qilib chiqarish. Todolarni sanasi bo'yicha filter qila olish.


-- maximal ball 100
-- Create - 15
-- O'zgartirish - 15
-- o'chirish - 10
-- Statusini o'zgartirish - 15
-- GEt by pagination and filter - 45


-- O'tish bali 60

-- Vaqt 3 soat