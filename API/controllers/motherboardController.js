const MotherboardService = require("../service/motherboardService");
const MotherboardCreate = require("../models/in/motherboard/motherboardCreate");
const MotherboardUpdate = require("../models/in/motherboard/motherboardUpdate");
const ApiError = require("../exeptions/api-error");

class MotherboardController {
  async create(req, res, next) {
    try {
      const newMotherboard = new MotherboardCreate(req.body);
      await MotherboardService.create(newMotherboard);
      res.status(201).json({ message: "Motherboard created successfully" });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const motherboards = await MotherboardService.getAll();
      res.json(motherboards);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const motherboardId = req.params.id;

      const motherboard = await MotherboardService.getById(motherboardId);
      res.json(motherboard);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const motherboardId = req.params.id;
      const updateMotherboard = new MotherboardUpdate(req.body);
      await MotherboardService.update(motherboardId, updateMotherboard);
      res.json({ message: "Motherboard updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const motherboardId = req.params.id;
      await MotherboardService.delete(motherboardId);
      res.json({ message: "Motherboard deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MotherboardController();
