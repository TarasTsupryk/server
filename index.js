import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

async function start() {
  try {
    await mongoose.connect(DATABASE_URL, {
        
    });
    app.listen(PORT, () => {
      console.log(`server started on port - ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
