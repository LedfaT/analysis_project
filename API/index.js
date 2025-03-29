require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ы;

const port = process.env.PORT || 3000;

const start = async () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });
};

start();
