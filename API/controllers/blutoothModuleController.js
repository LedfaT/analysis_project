const ApiError = require("../exeptions/api-error");
const BluetoothModuleService = require("../services/bluetoothModuleService");
const BluetoothModuleCreate = require("../models/in/bluetoothModule/bluetoothModuleCreate");
const BluetoothModuleUpdate = require("../models/in/bluetoothModule/bluetoothModuleUpdate");

class BlutoothModuleController {
  async createBlutoothModule(req, res, next) {
    try {
      const newBluetoothModule = new BluetoothModuleCreate(req.body);
      await BluetoothModuleService.create(newBluetoothModule);
      res.json({ message: "Bluetooth module created" });
    } catch (e) {
      next(e);
    }
  }
  async getBlutoothModule(req, res, next) {
    try {
      const { id } = req.params;
      const bluetoothModule =
        await BluetoothModuleService.getBluetoothModuleById(id);
      return res.json(bluetoothModule);
    } catch (e) {
      next(e);
    }
  }
  async updateBlutoothModule(req, res, next) {
    try {
      const { id } = req.params;
      const updatedBluetoothModule = new BluetoothModuleUpdate(req.body);
      await BluetoothModuleService.update(id, updatedBluetoothModule);
      res.json({ message: "Bluetooth module updated" });
    } catch (e) {
      next(e);
    }
  }
  async deleteBlutoothModule(req, res, next) {
    try {
      const { id } = req.params;
      await BluetoothModuleService.delete(id);
      res.json({ message: "Bluetooth module deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
  async getAllBlutoothModules(req, res, next) {
    try {
      const bluetoothModules =
        await BluetoothModuleService.getAllBluetoothModules({});
      res.json(bluetoothModules);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BlutoothModuleController();
