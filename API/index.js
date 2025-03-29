require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const port = process.env.PORT || 3000;

const start = async () => {
  await pool
    .connect()
    .then(() => console.log("Connect to DB!"))
    .catch((err) => console.error("Error connecting to DB:", err));

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });
};

start();
