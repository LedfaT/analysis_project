const ApiError = require("../exeptions/api-error");
const bluetoothModuleService = require("../services/bluetoothModuleService");

class BlutoothModuleController {
  async createBlutoothModule(req, res, next) {
    try {
      const { title, generation, cost } = req.body;
      await bluetoothModuleService.create(title, generation, cost);
      return res.send("bluetooth module created");
    } catch (e) {
      next(e);
    }
  }
  async getBlutoothModule(req, res, next) {
    try {
      const BmId = req.params.id;
      const bluetoothModule =
        await bluetoothModuleService.getBluetoothModuleById(BmId);
      return res.json(bluetoothModule);
    } catch (e) {
      next(e);
    }
  }
  updateBlutoothModule(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  deleteBlutoothModule(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async getAllBlutoothModules(req, res, next) {
    try {
      const bluetoothModules =
        await bluetoothModuleService.getAllBluetoothModules();
      res.json(bluetoothModules);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BlutoothModuleController();
