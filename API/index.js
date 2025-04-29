require("dotenv").config();
const express = require("express");
const db = require("./Entity");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/router");
const bluetoothModuleRouter = require("./router/bluetoothModuleRouter");
const coolingSystemRouter = require("./router/coolingSystemRouter");
const wifiModuleRouter = require("./router/wifiModuleRouter");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", router);
app.use("/api/bluetooth-module", bluetoothModuleRouter);
app.use("/api/cooling-system", coolingSystemRouter);
app.use("/api/wifi-module", wifiModuleRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });

  await db.sequelize.sync({ force: true });
};

start();
