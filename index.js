import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();
const PORT = process.env.PORT;

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`server started on port - ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
