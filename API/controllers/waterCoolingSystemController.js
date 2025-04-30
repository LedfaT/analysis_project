const ApiError = require("../exeptions/api-error");
const WaterCoolingSystemService = require("../services/waterCoolingSystemService");
const WaterCoolingCreate = require("../models/in/waterCoolingSystem/waterCoolingSystemCreate");
const WaterCoolingUpdate = require("../models/in/waterCoolingSystem/waterCoolingSystemUpdate");

class WaterCoolingSystemController {
  async createSystem(req, res, next) {
    try {
      const newSystem = new WaterCoolingCreate(req.body);
      await WaterCoolingSystemService.create(newSystem);
      res.json({ message: "Water Cooling System created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getSystem(req, res, next) {
    try {
      const { id } = req.params;
      const system = await WaterCoolingSystemService.getSystemById(id);
      return res.json(system);
    } catch (e) {
      next(e);
    }
  }

  async updateSystem(req, res, next) {
    try {
      const { id } = req.params;
      const updatedSystem = new WaterCoolingUpdate(req.body);
      await WaterCoolingSystemService.update(id, updatedSystem);
      res.json({ message: "Water Cooling System updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteSystem(req, res, next) {
    try {
      const { id } = req.params;
      await WaterCoolingSystemService.delete(id);
      res.json({ message: "Water Cooling System deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllSystems(req, res, next) {
    try {
      const systems = await WaterCoolingSystemService.getAllSystems();
      res.json(systems);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new WaterCoolingSystemController();
