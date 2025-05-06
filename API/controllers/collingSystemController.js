const ApiError = require("../exeptions/api-error");
const CoolingSystemService = require("../services/coolingSystemService");
const CoolingSystemCreate = require("../models/in/coolingSystem/coolingSystemCreate");
const CoolingSystemUpdate = require("../models/in/coolingSystem/coolingSystemUpdate");

class CoolingSystemController {
  async createCollingSystem(req, res, next) {
    try {
      const newCooling = new CoolingSystemCreate(req.body);
      await CoolingSystemService.create(newCooling);
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
      const updatedCoolingSystem = new CoolingSystemUpdate(req.body);
      await CoolingSystemService.update(id, updatedCoolingSystem);
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
      const coolingSystem = await CoolingSystemService.getAllCoolingSystems(
        req.query
      );
      res.json(coolingSystem);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CoolingSystemController();
