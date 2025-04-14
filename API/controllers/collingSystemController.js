const ApiError = require("../exeptions/api-error");
const CoolingSystemService = require("../services/coolingSystemService");

class CoolingSystemController {
  async createCollingSystem(req, res, next) {
    try {
      const { title, heat_removal, type_size, cost } = req.body;
      await CoolingSystemService.create(title, heat_removal, type_size, cost);
      res.json({ message: "Colling system created" });
    } catch (e) {
      next(e);
    }
  }
  async getCollingSystem(req, res, next) {
    try {
      const { id } = req.params;
      const coolingSystem = await CoolingSystemService.getCoolingSystemById(id);
      return res.json(coolingSystem);
    } catch (e) {
      next(e);
    }
  }
  async updateCollingSystem(req, res, next) {
    try {
      const { id } = req.params;
      const { title, heat_removal, type_size, cost } = req.body;
      await CoolingSystemService.update(id, {
        title,
        heat_removal,
        type_size,
        cost,
      });
      res.json({ message: "Bluetooth module updated" });
    } catch (e) {
      next(e);
    }
  }
  async deleteCollingSystem(req, res, next) {
    try {
      const { id } = req.params;
      await CoolingSystemService.delete(id);
      res.json({ message: "Cooling system deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
  async getAllCollingSystemes(req, res, next) {
    try {
      const coolingSystem = await CoolingSystemService.getAllCoolingSystems();
      res.json(coolingSystem);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CoolingSystemController();
