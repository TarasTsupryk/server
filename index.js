import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./src/groups/group.router.js";

dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

app.use(express.json());
app.use('/', router)

async function start() {
  try {
    await mongoose.connect(DATABASE_URL, {});
    app.listen(PORT, () => {
      console.log(`server started on port - ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
