const PowerSupplyService = require("../services/powerSupplyService");
const PowerSupplyCreate = require("../models/in/powerSupply/powerSupplyCreate");
const PowerSupplyUpdate = require("../models/in/powerSupply/powerSupplyUpdate");
const ApiError = require("../exeptions/api-error");

class PowerSupplyController {
  async create(req, res, next) {
    try {
      const newSupply = new PowerSupplyCreate(req.body);
      await PowerSupplyService.create(newSupply);
      res.status(201).json({ message: "Power supply created successfully" });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const result = await PowerSupplyService.getAll(req.query);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await PowerSupplyService.getById(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const updatedSupply = new PowerSupplyUpdate(req.body);
      await PowerSupplyService.update(id, updatedSupply);
      res.json({ message: "Power supply updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await PowerSupplyService.delete(id);
      res.json({ message: "Power supply deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PowerSupplyController();
