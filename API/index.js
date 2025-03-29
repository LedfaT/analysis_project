require("dotenv").config();
const express = require("express");
const db = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });

  await db.sequelize.sync();
  console.log("Database synced");
};

start();
