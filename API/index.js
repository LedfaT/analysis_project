require("dotenv").config();
const express = require("express");
const db = require("./Entity");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/router");
const bluetoothModuleRouter = require("./router/bluetoothModuleRouter");
const coolingSystemRouter = require("./router/coolingSystemRouter");
const wifiModuleRouter = require("./router/wifiModuleRouter");
const cpuRouter = require("./router/cpuRouter");
const gpuRouter = require("./router/gpuRouter");
const hddRouter = require("./router/hddRouter");
const motherboardRouter = require("./router/motherboardRouter");
const powerSupplyRouter = require("./router/powerSupplyRouter");
const ramRouter = require("./router/ramRouter");
const ssdRouter = require("./router/ssdRouter");
const towerRouter = require("./router/towerRouter");
const waterCoolingSystemRouter = require("./router/waterCoolingSystemRouter");
const computerRouter = require("./router/computerRouter");

const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
app.use(
  cors({
    // origin: [process.env.CLIENT_URL],
    // credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", router);
app.use("/api/bluetooth-module", bluetoothModuleRouter);
app.use("/api/cooling-system", coolingSystemRouter);
app.use("/api/wifi-module", wifiModuleRouter);
app.use("/api/HDD", hddRouter);
app.use("/api/SSD", ssdRouter);
app.use("/api/GPU", gpuRouter);
app.use("/api/CPU", cpuRouter);
app.use("/api/water-cooling-system", waterCoolingSystemRouter);
app.use("/api/motherboard", motherboardRouter);
app.use("/api/power-supply", powerSupplyRouter);
app.use("/api/tower", towerRouter);
app.use("/api/RAM", ramRouter);
app.use("/api/computer", computerRouter);
app.use(errorMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });

  await db.sequelize.sync();
};

start();
