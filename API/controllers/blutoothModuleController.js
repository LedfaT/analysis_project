const ApiError = require("../exeptions/api-error");
const BluetoothModuleService = require("../services/bluetoothModuleService");

class BlutoothModuleController {
  async createBlutoothModule(req, res, next) {
    try {
      const { title, generation, cost } = req.body;
      await BluetoothModuleService.create(title, generation, cost);
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
      const { title, generation, cost } = req.body;
      await BluetoothModuleService.update(id, {
        title,
        generation,
        cost,
      });
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
        await BluetoothModuleService.getAllBluetoothModules();
      res.json(bluetoothModules);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BlutoothModuleController();
