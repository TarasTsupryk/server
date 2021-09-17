import mysql2 from "mysql2/promise";
import dotenv from "dotenv"

dotenv.config()

const Pool = mysql2.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

export default Pool;
