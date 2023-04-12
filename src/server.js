import express from "express";
import router from "./routes/index.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", router);

let PORT = process.env.PORT || 2002;
app.listen(PORT, () => console.log(PORT));
