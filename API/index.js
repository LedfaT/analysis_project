require("dotenv").config();
const express = require("express");
const db = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/router");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(errorMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });

  await db.sequelize.sync();
  console.log("Database synced");
};

start();
