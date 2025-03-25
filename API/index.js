require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const start = async () => {
  app.listen(process.env.PORT, () => {
    console.log(`server listens on port ${process.env.PORT}`);
  });
};

start();
